import { SVGTile } from '../SVGTile';
import { Tile } from '../../interfaces';

export const TileB2 = ({ rotation, size, fill1, fill2 }: Tile) => (
  <div style={{ transform: `rotate(${rotation}deg)` }}>
    <SVGTile size={size}>
      <g id="B2" fill="none" fillRule="evenodd">
        <path fill={fill2} d="M96 352h416v64H96z" />
        <path fill={fill2} d="M96 0h64v416H96z" />
        <path fill={fill2} d="M0 0h160v64H0z" />
        <path fill={fill1} d="M352 224h64v288h-64zM224 96h64v192h-64z" />
        <path fill={fill1} d="M224 96h288v64H224zM224 224h192v64H224z" />
        <path fill={fill2} d="M96 480h416v32H96z" />
        <path fill={fill1} d="M480 96h32v416h-32z" />
      </g>
    </SVGTile>
  </div>
);
