import { TileA1 } from './TileA1';
import { TileA2 } from './TileA2';
import { TileB1 } from './TileB1';
import { TileB2 } from './TileB2';
import { EscherTileProps, TileVariant } from '../../interfaces';

export const EscherTile = ({
  variant,
  rotation,
  size,
  fill1,
  fill2,
}: EscherTileProps) => {
  let Tile;
  switch (variant) {
    case TileVariant.A1:
      Tile = TileA1;
      break;

    case TileVariant.A2:
      Tile = TileA2;
      break;

    case TileVariant.B1:
      Tile = TileB1;
      break;

    case TileVariant.B2:
      Tile = TileB2;
      break;
  }

  return <Tile rotation={rotation} size={size} fill1={fill1} fill2={fill2} />;
};
