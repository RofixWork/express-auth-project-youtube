import "dotenv/config";
import express from "express";
import notFoundMiddleware from "./middlewares/notfound.js";
import errorHanlderMiddleware from "./middlewares/error-handler.js";
import authRouter from "./routes/auth.routes.js";
import morgan from "morgan";
import connectDB from "./db/connect.js";

const app = express();

//middleware
app.use(express.json())

//routes
app.use('/api/v1/auth', authRouter);
if(process.env.NODE_ENV === 'development')  {
  app.use(morgan('dev'))
}
//custom middlewares and error handling middleware
app.use(notFoundMiddleware);
app.use(errorHanlderMiddleware);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
})();

