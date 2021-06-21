import express, { Request, Response } from "express";

const app = express();

app
  .get("/test", (_req: Request, res: Response): Response => {
    return res.send("GET | Hello Next Level Week #6");
  })
  .post("/test", (_req: Request, res: Response): Response => {
    return res.send("POST | Hello Next Level Week #6");
  });

app.listen(3000, (): void =>
  console.log("Server is running in: http://localhost:3000/")
);
