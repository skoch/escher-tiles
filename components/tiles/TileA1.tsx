
import { SVGTile } from '../SVGTile';
import { Tile } from '../../interfaces';

export const TileA1 = ({ rotation, size, fill1, fill2 }: Tile) => (
  <div style={{ transform: `rotate(${rotation}deg)` }}>
    <SVGTile size={size}>
      <g id="A1" fill="none" fillRule="evenodd">
        <path fill={fill1} d="M0 352h512v64H0z" />
        <path fill={fill2} d="M96 0h64v288H96z" />
        <path fill={fill1} d="M0 0h416v32H0z" />
        <path fill={fill2} d="M352 224h64v288h-64zM0 96h512v64H0z" />
        <path fill={fill1} d="M0 0h32v416H0z" />
        <path fill={fill2} d="M96 224h320v64H96z" />
        <path fill={fill1} d="M96 480h416v32H96z" />
        <path fill={fill2} d="M480 96h32v416h-32z" />
      </g>
    </SVGTile>
  </div>
);
