import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import usersRoutes from "./routes/users.routes";
import sessionRoutes from "./routes/session.routes";
import categoriesRoutes from "./routes/categories.routes";
import studyTopicsRoutes from "./routes/studyTopics.routes";

const app = express();

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/login", sessionRoutes);
app.use("/categories", categoriesRoutes);
app.use("/study-topics", studyTopicsRoutes);

app.use(handleErrorMiddleware);

export default app;
