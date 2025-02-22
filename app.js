import "dotenv/config";
import express from "express";
import notFoundMiddleware from "./middlewares/notfound.js";
import errorHanlderMiddleware from "./middlewares/error-handler.js";
import authRouter from "./routes/auth.routes.js";


const app = express();

//middleware
app.use(express.json())

//routes
app.use('/api/v1/auth', authRouter);
//custom middlewares and error handling middleware
app.use(notFoundMiddleware);
app.use(errorHanlderMiddleware);

const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
