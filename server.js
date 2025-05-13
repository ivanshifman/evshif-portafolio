import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import portfolioRoutes from "./routes/portfolioRoute.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173", 
  "https://evshif-portafolio-frontend.onrender.com"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS no permitido desde esta fuente'), false);
    }
  }
}));
app.use(express.json());
app.use("/api/v1/portfolio", portfolioRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
