import fs from "fs/promises";
import { PlayerModel } from "../models/player-model";
import { ClubModel } from "../models/club-model";

export async function databaseLoad(databasePath: string) {
    const databaseToString = await fs.readFile(databasePath, "utf-8")
    const databaseParsed = JSON.parse(databaseToString);

    return databaseParsed;
}

export async function databaseSave(newData: any, databasePath: string) {
    const dataType = typeof(newData);
    const databaseStringfied = JSON.stringify(newData);
    
    if (newData === Array<PlayerModel> || newData === Array<ClubModel>) {
        const databaseToString = await fs.writeFile(databasePath, "utf-8")
    } else {
        throw(Error('Type has no matches in database'))
    }
}
// tipo de paramêtro -> "./src/data/x_database.json"
