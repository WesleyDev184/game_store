import Link from "next/link";
import Image from "next/image";
import logo from "../../public/GameStoreLogo.png";
import styles from "../../styles/SideBar.module.css";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const SideBar = () => {
  return (
    <div className={`${styles.sideContainer}`}>
      <div className={`${styles.LogoContainer}`}>
        <Image src={logo} alt="Game Store Logo" width={50} height={50} />
        <h5>Game Store</h5>
      </div>
      <div className={`${styles.List} flex flex-col gap-5`}>
        <Link href="/">
          <>
            <span className={`flex items-center gap-2`}><CategoryRoundedIcon/> Categorias</span>
          </>
        </Link>
        <Link href="/">
          <>
            <span className={`flex items-center gap-2`}><SearchRoundedIcon/> Busca</span>
          </>
        </Link>
        <Link href="/">
          <>
            <span className={`flex items-center gap-2`}><FavoriteRoundedIcon/> Favoritos</span>
          </>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
