import express from "express";
import calcTable from "./calendar-config.js";
const app = express();
const port = 3000;

app.set("view-engine", "ejs");
import path from "path"
import { noteRouter } from "./Router/noteRouter.js";
import mongoose from "./connection/mongodb.js";

const __dirname = path.resolve();
app.use(express.static((path.join(__dirname, 'views'))));

app.get("/", (req, res) => {
    const year = req.query.year || 2020;
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    res.render("index.ejs", { calendar: calcTable(year), months, year });
});
app.use(express.json());
app.use("/", noteRouter)
app.listen(port, () => {
    console.log(`app is listening on URL===> http://localhost:${port}`);
});