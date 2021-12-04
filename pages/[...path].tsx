import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css';
import { Colors, IParams, TileVariant } from '../interfaces';
import { DocumentHead } from '../components/DocumentHead';
import { GoogleAnalytics } from '../utils/GoogleAnalytics';
import { EscherTile } from '../components/tiles/EscherTile';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

const Escher: NextPage<Colors> = ({
  fill1,
  fill2,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [tileSize, setTileSize] = useState<number>(100);

  useEffect(() => {
    setTileSize(width && width <= 599 ? 35 : 100);
  }, [width]);

  const refreshColors = async () => {
    const res = await fetch('/api/colors');
    const colors = await res.json();
    router.push(`/${colors.fill1}/${colors.fill2}`);
  };

  const size = String(tileSize);

  return (
    <div className={styles.container}>
      <DocumentHead title="Escher Tiles" description="escher tiles" />

      <GoogleAnalytics />

      <main className={styles.main}>
        <nav>
          <Link href={router.asPath}>
            <a
              className={styles.navLink}
              style={{ color: fill1 }}
              onClick={refreshColors}
            >
              Random Colors
            </a>
          </Link>
          <Link href="/colors-api">
            <a className={styles.navLink} style={{ color: fill1 }}>
              Colors API
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.navLink} style={{ color: fill1 }}>
              About
            </a>
          </Link>
        </nav>
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
        <footer className={styles.footer}>skoch&copy;2021</footer>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Colors> = async (
  context: GetServerSidePropsContext,
) => {
  const { path } = context.params as IParams;
  const colors: Colors = {
    fill1: `#${path[0]}`,
    fill2: `#${path[1]}`,
  };

  return {
    props: colors,
  };
};

export default Escher;
