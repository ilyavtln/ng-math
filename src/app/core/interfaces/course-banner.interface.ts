import {IImage} from "./image.interface";
import {IAnchor} from "./anchor.interface";
import {IBadge} from "./badge.interface";

export interface ICourseBanner {
  title: string;
  duration: number;
  themes: number;
  description?: string;
  color?: string;
  image?: IImage;
  anchors?: IAnchor[];
  badges?: IBadge;
}
