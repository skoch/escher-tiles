import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';

import styles from '../styles/Home.module.css';

import { Footer } from '../components/Footer';
import { DocumentHead } from '../components/DocumentHead';
import { GoogleAnalytics } from '../utils/GoogleAnalytics';

const About: NextPage = () => (
  <div className={styles.container}>
    <DocumentHead
      title="Escher Tiles | About"
      description="about the escher tiles"
    />

    <GoogleAnalytics />

    <main className={styles.main}>
      <nav>
        <Link href="/3982b8/06102d">
          <a className={styles.navLink}>Tiles</a>
        </Link>
        <Link href="/colors-api">
          <a className={styles.navLink}>Colors API</a>
        </Link>
      </nav>
      <div className={styles.content}>
        <h1>About</h1>
        <p className={styles.small}>November 30, 2021</p>
        <h2>Process</h2>
        <p>
          I&apos;d seen a book on Escher a while ago and in particular a project
          that focused on (surprise!) tiles. I was fascinated by the pattern, of
          course, and thought to myself,
          <i>&#8220;this would be fun to translate to code.&#8221;</i> I took a
          picture of the page hoping that I&apos;d eventually find some time.
        </p>
        <Image
          src="/escher-original.jpg"
          alt="escher's original project"
          width={600}
          height={337.5}
        />
        <p>
          Thanksgiving 2021, perfect time! My first task was to create some
          SVGs. Initially my proportions were all wrong but I at least, for the
          first tile, was able to understand the lines and how they worked
          together. Once I had the &#8220;pattern&#8221; down, I set off to
          understand the width of the lines in relation to the overall square.
        </p>
        <p>
          Initially, I was working with a 500x500 square. However, given that
          there were lines that were split along the edges, I realized that
          I&apos;d need to change my dimensions to accommodate this. I then
          settled on a 512x512 square that would allow me to have lines 64px
          wide as well as the split lines around the border that would be 32px.
        </p>
        <p>Good numbers to work with.</p>
        <Image
          src="/dimensions.svg"
          alt="tile dimensions"
          width={512}
          height={512}
        />
        <p>
          With this in place, it was easy enough to start making the necessary
          lines for each of the tiles. The end result was 4 SVGs named:
          <br />
          <code className={styles.code}>A1 A2 B1 B2</code>
          <br />
          That end up looking like this:
        </p>
        <Image
          src="/A1.svg"
          alt="tile A1 with dimensions"
          width={512}
          height={512}
        />
        <p>
          Export without the dimensions and then optimize the SVGs using{' '}
          <a href="https://jakearchibald.github.io/svgomg/">one</a> of my
          favorite tools.
        </p>
        <p>
          Once these were complete, I initially just used the{' '}
          <code className={styles.code}>next/image</code> component to plop
          these into the page to work out the rotation. In doing so, I really
          got a sense for how Escher was thinking / what the pattern is.
          Everything in the center is an &#8220;A&#8221; tile. Edges are all
          &#8220;B&#8221;. As for rotation, that took some time however the
          pattern is there: once you have a row, it&apos;s duplicated below
          &mdash; in reverse.
        </p>
        <p>
          And finally, create components out of all these to <s>potentially</s>{' '}
          mess with the colors. <s>Nothing done yet, but</s> the groundwork is
          there.
        </p>
        <p>
          <strong>Update:</strong> The{' '}
          <Link href="/colors-api">
            <a>colors API</a>
          </Link>{' '}
          will now allow you to defined the colors as well as have random
          colors.
        </p>
        <h2>Tech</h2>
        <p>
          This is a <a href="https://nextjs.org/">Next JS</a> app, deployed on{' '}
          <a href="https://vercel.com/">Vercel</a>.
        </p>
        <p>Overkill? Probably.</p>
        <p>
          However, I wanted to spin up a new Next JS app and see how
          Vercel&apos;s deployment process has changed since it&apos;s been a
          while since I&apos;ve used it.{' '}
          <i>
            Overall, good stuff. UI has changed drastically and the flow is not
            dissimilar from <a href="https://netlify.com/">Netlify</a>.
          </i>
        </p>
      </div>
      <Footer />
    </main>
  </div>
);

export default About;
