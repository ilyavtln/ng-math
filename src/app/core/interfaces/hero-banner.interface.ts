import {IImage} from "./image.interface";
import {IAnchor} from "./anchor.interface";
import {IBadge} from "./badge.interface";

export interface IHeroBanner {
  title: string;
  description: string;
  image: IImage;
  anchors?: IAnchor[];
  badges?: IBadge;
}
