import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css';
import { Colors, TileVariant } from '../interfaces';
import { DocumentHead } from '../components/DocumentHead';
import { GoogleAnalytics } from '../utils/GoogleAnalytics';
import { EscherTile } from '../components/tiles/EscherTile';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

const Escher: NextPage<Colors> = ({
  fill1,
  fill2,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { width } = useWindowDimensions();
  const [tileSize, setTileSize] = useState<number>(100);

  useEffect(() => {
    setTileSize(width && width <= 599 ? 35 : 100);
  }, [width]);

  const size = String(tileSize);

  return (
    <div className={styles.container}>
      <DocumentHead title="Escher Tiles" description="escher tiles" />

      <GoogleAnalytics />

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
        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.navLink} style={{ color: fill1 }}>
              About
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Colors> = async (
  context: GetServerSidePropsContext,
) => {
  // query params?
  const { c1, c2 } = context.query;
  let colors: Colors = {
    fill1: '000',
    fill2: 'fff',
  };

  // if so, set them as the colors
  // otherwise, fetch from api
  if (c1 && c2) {
    colors.fill1 = `#${c1}`;
    colors.fill2 = `#${c2}`;
  } else {
    const res = await fetch(`${process.env.VERCEL_URL}/api/colors`);
    colors = await res.json();
  }

  return {
    props: colors,
  };
};

export default Escher;
