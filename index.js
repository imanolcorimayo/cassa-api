// npm init
// npm install nodemon --save-dev
// npm install express sequelize pg morgan axios

// const {   } = require("./src/db");

const {
    conn,
  } = require("./src/db");

const server = require("./src/app.js");

conn.sync({ force: false }).then(() => {
    server.listen(process.env.PORT || 3001, async () => {
        console.log("Server is running on port 3001");
    });
});