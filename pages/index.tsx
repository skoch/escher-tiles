import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {

  const { width } = useWindowDimensions();
  const [tileSize, setTileSize] = useState<number>(100);

  useEffect(() => {
    setTileSize(width && width <= 599 ? 50 : 100);
  }, [width]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Escher Tiles</title>
        <meta name="description" content="escher tiles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Image className={styles.rotate0} src="/tile-b-1.svg" alt="B1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate90} src="/tile-b-2.svg" alt="B2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate0} src="/tile-b-2.svg" alt="B2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate90} src="/tile-b-1.svg" alt="B1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate0} src="/tile-b-1.svg" alt="B1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate90} src="/tile-b-2.svg" alt="B2" width={tileSize} height={tileSize} />

          <Image className={styles.rotate270} src="/tile-b-2.svg" alt="B1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate180} src="/tile-a-1.svg" alt="A1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate270} src="/tile-a-1.svg" alt="A1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate180} src="/tile-a-2.svg" alt="A2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate270} src="/tile-a-2.svg" alt="A2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate180} src="/tile-b-1.svg" alt="B1" width={tileSize} height={tileSize} />

          <Image className={styles.rotate0} src="/tile-b-2.svg" alt="B1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate90} src="/tile-a-1.svg" alt="A1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate0} src="/tile-a-1.svg" alt="A1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate90} src="/tile-a-2.svg" alt="A2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate0} src="/tile-a-2.svg" alt="A2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate90} src="/tile-b-1.svg" alt="B1" width={tileSize} height={tileSize} />

          <Image className={styles.rotate270} src="/tile-b-1.svg" alt="B1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate180} src="/tile-a-2.svg" alt="A2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate270} src="/tile-a-2.svg" alt="A2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate180} src="/tile-a-1.svg" alt="A1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate270} src="/tile-a-1.svg" alt="A1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate180} src="/tile-b-2.svg" alt="B1" width={tileSize} height={tileSize} />

          <Image className={styles.rotate0} src="/tile-b-1.svg" alt="B1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate90} src="/tile-a-2.svg" alt="A2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate0} src="/tile-a-2.svg" alt="A2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate90} src="/tile-a-1.svg" alt="A1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate0} src="/tile-a-1.svg" alt="A1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate90} src="/tile-b-2.svg" alt="B1" width={tileSize} height={tileSize} />

          <Image className={styles.rotate270} src="/tile-b-2.svg" alt="B2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate180} src="/tile-b-1.svg" alt="B1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate270} src="/tile-b-1.svg" alt="B1" width={tileSize} height={tileSize} />
          <Image className={styles.rotate180} src="/tile-b-2.svg" alt="B2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate270} src="/tile-b-2.svg" alt="B2" width={tileSize} height={tileSize} />
          <Image className={styles.rotate180} src="/tile-b-1.svg" alt="B1" width={tileSize} height={tileSize} />
        </div>
      </main>

    </div>
  );
}

export default Home
