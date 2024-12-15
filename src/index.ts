import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { main } from "@/db/db_connect";
import apiRouter from "@/router";
import Test from "@/db/models/test.model";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRouter);

app.get("/test-db", (req: Request, res: Response) => {
  main().then((e) => res.send('success') ).catch(err => res.send(err))
});

app.get("/", (req: Request, res: Response) => {
  res.send('Hi pip')
});

app.get('/silence/:name', (req: Request, res: Response) => {
  const TestName = new Test({ name: req.params.name });
  res.send(TestName.name)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
