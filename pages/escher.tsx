import Head from 'next/head'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css'
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { EscherTile } from '../components/tiles/EscherTile';
import { TileVariant } from '../interfaces';

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
      <Head>
        <title>Escher Tiles</title>
        <meta name="description" content="escher tiles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
}

export default Escher;
