import Link from 'next/link';
import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { useState } from 'react';

import { ColorsApiPage, TileVariant } from '../interfaces';
import styles from '../styles/Home.module.css';
import { DocumentHead } from '../components/DocumentHead';
import { GoogleAnalytics } from '../utils/GoogleAnalytics';
import { EscherTile } from '../components/tiles/EscherTile';

const ColorsApi: NextPage<ColorsApiPage> = ({
  baseUrl,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [fill1] = useState<string>('#232425');
  const [fill2] = useState<string>('#b1ad38');

  return (
    <div className={styles.container}>
      <DocumentHead
        title="Escher Tiles | About"
        description="about the escher tiles"
      />

      <GoogleAnalytics />

      <main className={styles.main}>
        <nav>
          <Link href="/">
            <a className={styles.navLink}>Tiles</a>
          </Link>
          <Link href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
        </nav>
        <div className={styles.content}>
          <EscherTile
            variant={TileVariant.A1}
            rotation="0"
            size="50"
            fill1={fill1}
            fill2={fill2}
          />
          <h1>Colors API</h1>
          <p className={styles.small}>December 1, 2021</p>
          <h2>Random Colors</h2>
          <p>
            I added the ability to have random colors (default) or to manually
            change the color scheme. Reload the page to see a new random set or
            you can append query parameters like so:
            <br />
            <Link href={`${baseUrl}/?c1=#232425&c2=#b1ad38`}>
              <a href={`${baseUrl}/?c1=#232425&c2=#b1ad38`}>
                {`${baseUrl}/?c1=#232425&c2=#b1ad38`}
              </a>
            </Link>
            <br />
            where `c1` and `c2` are both any valid hex value.
          </p>
          <p>
            The random colors are from{' '}
            <a href="https://randoma11y.com/">randoma11y.com</a> when they had
            an API and at one point I&apos;d saved, I believe, the 100 most
            popular color combinations.
          </p>
        </div>
        <footer className={styles.footer}>skoch&copy;2021</footer>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  ColorsApiPage
> = async () => {
  const props: ColorsApiPage = {
    baseUrl: process.env.BASE_URL || 'http:localhost:3000',
  };
  return {
    props,
  };
};
export default ColorsApi;
