import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { TileVariant } from '../interfaces';
import styles from '../styles/Home.module.css';
import { DocumentHead } from '../components/DocumentHead';
import { EscherTile } from '../components/tiles/EscherTile';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

const Escher: NextPage = () => {
  const { width } = useWindowDimensions();
  const [tileSize, setTileSize] = useState<number>(100);
  const [fill1] = useState<string>('#232425');
  const [fill2] = useState<string>('#b1ad38');

  useEffect(() => {
    setTileSize(width && width <= 599 ? 35 : 100);
  }, [width]);

  const size = String(tileSize);

  return (
    <div className={styles.container}>
      <DocumentHead title="Escher Tiles" description="escher tiles" />

      <main className={styles.main}>
        <div className={styles.grid}>
          <EscherTile
            variant={TileVariant.B1}
            rotation="0"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B2}
            rotation="90"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B2}
            rotation="0"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B1}
            rotation="90"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B1}
            rotation="0"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B2}
            rotation="90"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />

          <EscherTile
            variant={TileVariant.B2}
            rotation="270"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A1}
            rotation="180"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A1}
            rotation="270"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A2}
            rotation="180"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A2}
            rotation="270"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B1}
            rotation="180"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />

          <EscherTile
            variant={TileVariant.B2}
            rotation="0"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A1}
            rotation="90"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A1}
            rotation="0"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A2}
            rotation="90"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A2}
            rotation="0"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B1}
            rotation="90"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />

          <EscherTile
            variant={TileVariant.B1}
            rotation="270"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A2}
            rotation="180"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A2}
            rotation="270"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A1}
            rotation="180"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A1}
            rotation="270"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B2}
            rotation="180"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />

          <EscherTile
            variant={TileVariant.B1}
            rotation="0"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A2}
            rotation="90"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A2}
            rotation="0"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A1}
            rotation="90"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.A1}
            rotation="0"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B2}
            rotation="90"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />

          <EscherTile
            variant={TileVariant.B2}
            rotation="270"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B1}
            rotation="180"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B1}
            rotation="270"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B2}
            rotation="180"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B2}
            rotation="270"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
          <EscherTile
            variant={TileVariant.B1}
            rotation="180"
            size={size}
            fill1={fill1}
            fill2={fill2}
          />
        </div>
      </main>
    </div>
  );
};

export default Escher;
