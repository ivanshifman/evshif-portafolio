import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import path from "path";
import portfolioRoutes from "./routes/portFolioRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "./client/build")));
app.use("/api/v1/portfolio", portfolioRoutes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
