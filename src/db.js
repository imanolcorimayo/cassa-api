require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/cassa`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

const basename = path.basename(__filename);
const modelDefiners = [];
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
// Recreate db if already exist - This creates the table, dropping it first if it already existed
sequelize.sync({ force: true });
sequelize.models = Object.fromEntries(entries);

const {
  product,
  province,
  sales,
  user,
  address,
  business,
  city,
  merchant,
  month_statistics,
  product_category,
  provider,
  purchase,
  statistics,
  type_merchant,
  zip_city,
  user_statistics,
  user_month_statistics,
} = sequelize.models;

// **************** USER RELATIONS ****************

// user - business | many to many
merchant.belongsToMany(business, { through: "favorites" });
business.belongsToMany(merchant, { through: "favorites" });

// user - sales | one to many
user.hasMany(sales);
sales.belongsTo(user);

// user - merchant | one to one
user.hasOne(merchant);
merchant.belongsTo(user);

// **************** MERCHANT RELATIONS ****************

// merchant - business | many to many
merchant.belongsToMany(business, { through: "business_merchant" });
business.belongsToMany(merchant, { through: "business_merchant" });

// merchant - type_merchant | one to one
merchant.hasOne(type_merchant);
type_merchant.belongsTo(merchant);

// **************** TYPE_MERCHANT RELATIONS ****************

// merchant - type_merchant | one to one
type_merchant.hasOne(merchant);
merchant.belongsTo(type_merchant);

// **************** BUSINESS RELATIONS ****************

// business - product | one to many
business.hasMany(product);
product.belongsTo(business);

// business - product_category | one to many
business.hasMany(product_category);
product_category.belongsTo(business);

// business - sales | one to many
business.hasMany(sales);
sales.belongsTo(business);

// business - purchase | one to many
business.hasMany(purchase);
purchase.belongsTo(business);

// **************** PRODUCT RELATIONS ****************

// purchase - product | many to many
purchase.belongsToMany(product, { through: "product_purchase" });
product.belongsToMany(purchase, { through: "product_purchase" });

// provider - product | many to many
sales.belongsToMany(product, { through: "product_sales" });
product.belongsToMany(sales, { through: "product_sales" });

// **************** PROVIDER RELATIONS ****************

// provider - product | one to many
provider.hasMany(purchase);
purchase.belongsTo(provider);

// **************** CITY RELATIONS ****************

// city - zip_city | one to many
city.hasMany(zip_city);
zip_city.belongsTo(city);

// **************** PROVINCE RELATIONS ****************

// province - zip_city | one to many
province.hasMany(zip_city);
zip_city.belongsTo(province);

// **************** ADDRESS RELATIONS ****************

// address - user | one to one
address.hasOne(user);
user.belongsTo(address);

// address - provider | one to one
address.hasOne(provider);
provider.belongsTo(address);

// address - business | one to one
address.hasOne(business);
business.belongsTo(address);

// **************** STATISTICS RELATIONS ****************

// statistics - month_statistics | one to one
statistics.hasOne(month_statistics);
month_statistics.belongsTo(statistics);

// statistics - business | one to one
statistics.hasOne(business);
business.belongsTo(statistics);

// user_statistics - user_month_statistics | one to one
user_statistics.hasOne(user_month_statistics);
user_month_statistics.belongsTo(user_statistics);

// user_statistics - user | one to one
user_statistics.hasOne(user);
user.belongsTo(user_statistics);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
