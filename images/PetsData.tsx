import { StaticImageData } from "next/image";
import Alfredo from "./Alfredo.png";
import Carol from "./Carol.png";
import Juscelino from "./Juscelino.png";
import Matias from "./Matias.png";
import Rodolfo from "./Rodolfo.png";
import Sacha from "./Sacha.png";

export interface IPetsData {
  name: string;
  image: StaticImageData;
  gender: string;
}

export const PetsData: IPetsData[] = [
  {
    name: "Alfredo",
    image: Alfredo,
    gender: "male",
  },
  {
    name: "Sacha",
    image: Sacha,
    gender: "female",
  },
  {
    name: "Juscelino",
    image: Juscelino,
    gender: "male",
  },
  ,
  {
    name: "Carol",
    image: Carol,
    gender: "female",
  },
  {
    name: "Matias",
    image: Matias,
    gender: "male",
  },

  {
    name: "Rodolfo",
    image: Rodolfo,
    gender: "male",
  },
];
