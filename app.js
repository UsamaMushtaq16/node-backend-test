import express from "express";
import config from "./config.js";
import dotenv from "dotenv";
import apiRoutes from "./routes/api.routes.js";
import morgan from "morgan";

dotenv.config();

const app = express();
const { port } = config;

app.use(morgan("dev"));
app.use("/api", apiRoutes);

const server = app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});

app.close = (callback) => {
  server.close(callback);
};

export default app;
