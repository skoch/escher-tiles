import styles from '../styles/Footer.module.css';

interface Props {
  color?: string;
}

export const Footer = ({ color }: Props) => (
  <footer className={styles.footer}>
    <a style={{ color }} href="https://koch.dev">
      Stephen Koch | 2021
    </a>
  </footer>
);
