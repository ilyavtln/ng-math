import {Params} from "@angular/router";

export interface IAnchor {
  title?: string;

  href: string;

  params?: Params;

  fragment?: string;
}
