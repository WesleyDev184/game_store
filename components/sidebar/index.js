import Link from "next/link";
import Image from "next/image";
import logo from "../../public/GameStoreLogo.png";
import styles from "../../styles/SideBar.module.css";

const SideBar = () => {

  return (
    <div className={styles.sideContainer}>
      <div className={styles.LogoContainer}>
        <Image src={logo} alt="Game Store Logo" width={50} height={50} />
        <h5>Game Store</h5>
      </div>
      <div>
      </div>
    </div>
  );
};

export default SideBar;
