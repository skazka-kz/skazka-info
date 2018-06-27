// Create a custom Winston logger
const winston = require("winston");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" })
  ]
});
// If not prod mode - output to console too
if (process.env.NODE_ENV !== "production"){
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }))
}


module.exports = logger;