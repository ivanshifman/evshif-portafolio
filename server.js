import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import portfolioRoutes from "./routes/portFolioRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/portfolio", portfolioRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
