import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import Link from 'next/link';

import { ColorsApiPage } from '../interfaces';
import styles from '../styles/Home.module.css';

import { Footer } from '../components/Footer';
import { DocumentHead } from '../components/DocumentHead';
import { GoogleAnalytics } from '../utils/GoogleAnalytics';

const ColorsApi: NextPage<ColorsApiPage> = ({
  baseUrl,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <div className={styles.container}>
    <DocumentHead
      title="Escher Tiles | About"
      description="about the escher tiles"
    />

    <GoogleAnalytics />

    <main className={styles.main}>
      <nav>
        <Link href="/f35567/20161d">
          <a className={styles.navLink}>Tiles</a>
        </Link>
        <Link href="/about">
          <a className={styles.navLink}>About</a>
        </Link>
      </nav>
      <div className={styles.content}>
        <h1>Colors API</h1>
        <p className={styles.small}>December 1, 2021</p>
        <h2>Random Colors</h2>
        <p>
          Any valid hex value can be used as part of the path: one for each
          color. Here we see the defaults:
          <br />
          <Link href={`${baseUrl}/222324/b1ad38`}>
            <a href={`${baseUrl}/222324/b1ad38`}>
              {`${baseUrl}/222324/b1ad38`}
            </a>
          </Link>
          <br />
          No hash!
        </p>
        <p>
          The random colors are from{' '}
          <a href="https://randoma11y.com/">randoma11y.com</a> when they had an
          API and at one point I&apos;d saved, I believe, the 100 most popular
          color combinations.
        </p>
      </div>
      <Footer />
    </main>
  </div>
);

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
