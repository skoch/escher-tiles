import { ParsedUrlQuery } from 'querystring';

export interface Tile {
  size: string;
  fill1: string;
  fill2: string;
  rotation: string;
}

export enum TileVariant {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
}

export interface EscherTileProps extends Tile {
  variant: TileVariant;
}

export type Colors = {
  fill1: string;
  fill2: string;
};

export type ColorsApiPage = {
  baseUrl: string;
};

export interface IParams extends ParsedUrlQuery {
  path: string[];
}
