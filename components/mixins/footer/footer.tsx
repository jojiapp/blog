import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.wrap}>
      <span>&copy; blog |</span>
      <address className={styles.email}>jojiapp@gmail.com</address>
    </div>
  </footer>
);

export default Footer;
