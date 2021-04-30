module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "admin",
    DB: "postgres",
    dialect: "postgres",
    pool: {
      acquire: 30000,
      idle: 10000
    }
  };