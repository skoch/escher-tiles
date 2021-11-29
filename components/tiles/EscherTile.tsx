
import { Tile } from '../../interfaces';
import { TileA1 } from './TileA1';
import { TileA2 } from './TileA2';
import { TileB1 } from './TileB1';
import { TileB2 } from './TileB2';

export enum variants {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
};

interface EscherTileProps extends Tile {
  variant: variants;
}

export const EscherTile = ({
  variant,
  rotation,
  size,
  fill1,
  fill2,
}: EscherTileProps) => (
  <>
    {variant === variants.A1 && (
      <TileA1 rotation={rotation} size={size} fill1={fill1} fill2={fill2} />
    )}
    {variant === variants.A2 && (
      <TileA2 rotation={rotation} size={size} fill1={fill1} fill2={fill2} />
    )}
    {variant === variants.B1 && (
      <TileB1 rotation={rotation} size={size} fill1={fill1} fill2={fill2} />
    )}
    {variant === variants.B2 && (
      <TileB2 rotation={rotation} size={size} fill1={fill1} fill2={fill2} />
    )}
  </>
);
