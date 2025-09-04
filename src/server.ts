import express, { Request, Response } from "express";

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running at port http://localhost:${port}`)
});
