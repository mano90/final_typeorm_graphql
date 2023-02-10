module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "atwasoad21",
  database: "localisation",
  synchronize: true,
  logger: "advanced-console",
  logging: process.env.NODE_ENV === "production" ? ["error", "warn"] : "all",
  cache: true,
  dropSchema: false,
  entities: ["dist/models/*.js"],
};
