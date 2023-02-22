import styles from "@/styles/Header.module.css";

const Header = ({ artist }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{artist.name}</p>
        {" - "}
        <p>{artist.release?.name}</p>
      </div>
      <div className={styles.subHeader}>
        <p>Choose a music service:</p>
      </div>
    </div>
  );
};

export default Header;
