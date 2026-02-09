import express from 'express'
import authRoutes from "./modules/auth/auth.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { authMiddleware } from "./middlewares/auth.middleware.js";
import userRoutes from "./modules/users/user.routes.js";
import applicationRoutes from "./modules/applications/application.routes.js"
import statsRoutes from "./modules/stats/stats.routes.js";
import cors from "cors"

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// routes FIRST
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/stats", statsRoutes);

app.get("/api/protected", authMiddleware, (req, res) => {
    res.json({
        message: "Access granted",
        user: req.user,
    });
});

app.use((err, req, res, next) => {
  console.error(err);

  const status = err.statusCode || 400;

  res.status(status).json({
    message: err.message || "Something went wrong",
  });
});

// error middleware MUST be LAST
app.use(errorMiddleware);

export default app;