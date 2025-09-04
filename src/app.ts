import express, { json, Request, Response } from "express";

function createApp() {
    const app = express();

    app.use(json());

    app.get("/", (req: Request, res: Response) => {
        res.status(200).json({player: "Sergio Busquets"});
    });

    return app;
}

export default createApp;