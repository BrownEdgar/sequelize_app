import cookieParser from "cookie-parser";
import express, { static as estatic, json, urlencoded } from "express";
import fs from "fs";
import createError from "http-errors";
import logger from "morgan";
import { join } from "path";
import db from "./db/connection.js";

// swagger
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
// routes
import homeRouter from "./routes/main.js";
import usersRouter from "./routes/users.js";

const app = express();

// view engine setup
app.set("views", join("./views", "views"));
app.set("view engine", "ejs");

app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(YAML.parse(fs.readFileSync("./swagger.yaml", "utf8")), {
    customSiteTitle: "service swagger",
  }),
);
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(estatic(join("../public", "public")));

app.use("/", homeRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT, () => {
  console.log(`Server starting on port ${process.env.PORT}`);
});
