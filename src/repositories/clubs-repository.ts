import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

const database = [
 {
      "id": 1,
      "name": "Bayern Munich",
      "city": "Munich",
      "country": "Germany"
    },
    {
      "id": 2,
      "name": "Napoli",
      "city": "Naples",
      "country": "Italy"
    },
    {
      "id": 3,
      "name": "Manchester City",
      "city": "Manchester",
      "country": "England"
    },
    {
      "id": 4,
      "name": "Villarreal",
      "city": "Villarreal",
      "country": "Spain"
    },
    {
      "id": 5,
      "name": "Internazionale",
      "city": "Milan",
      "country": "Italy"
    },
    {
      "id": 6,
      "name": "CSKA Moscow",
      "city": "Moscow",
      "country": "Russia"
    },
    {
      "id": 7,
      "name": "Lille",
      "city": "Lille",
      "country": "France"
    },
    {
      "id": 8,
      "name": "Trabzonspor",
      "city": "Trabzon",
      "country": "Turkey"
    },
    {
      "id": 9,
      "name": "Manchester United",
      "city": "Manchester",
      "country": "England"
    },
    {
      "id": 10,
      "name": "Benfica",
      "city": "Lisbon",
      "country": "Portugal"
    },
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs;
};
