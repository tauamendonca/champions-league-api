import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import { databaseLoad } from "../utils/database-helper";


// "./src/data/player_database.json"
let player_database: Array<PlayerModel> = await databaseLoad("./src/data/player_database.json");


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return player_database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return player_database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  player_database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
  const index = player_database.findIndex((p) => p.id === id);

  if (index !== -1) {
    player_database.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
): Promise<PlayerModel> => {
  //find player
  const playerIndex =  player_database.findIndex((player) => player.id === id);

  if (playerIndex !== -1) {
    player_database[playerIndex].statistics = statistics;
  }

  return player_database[playerIndex];
};
