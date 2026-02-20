import { StaticImageData } from "next/image";

export interface Reference {
  url: string;
  image: StaticImageData;
  name: string;
  title: string;
}
