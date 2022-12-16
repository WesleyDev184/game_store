import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/GameStoreLogo.png";
import styles from "../../styles/SideBar.module.css";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const SideBar = () => {
  const menu = [
    {
      name: "Categorias",
      icon: <CategoryRoundedIcon />,
      path: "/categorias",
    },
    {
      name: "Busca",
      icon: <SearchRoundedIcon />,
      path: "/search",
    },
    {
      name: "Favoritos",
      icon: <FavoriteRoundedIcon />,
      path: "/favoritos",
    },
  ];

  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${styles.sideContainer} w-full ${
        open ? "h-full" : "h-[auto]"
      }`}
    >
      <div className={`${styles.LogoContainer} pb-2`}>
        <div className={`flex items-center gap-2`}>
          <Image src={logo} alt="Game Store Logo" width={50} height={50} />
          <h5 className={`${styles.title}`}>Game Store</h5>
        </div>
        <div className={`flex items-center justify-center`}>
          <button className={`${styles.btn_menu}`} onClick={() => setOpen(!open)}>
            <MenuRoundedIcon />
          </button>
        </div>
      </div>
      <div className={`${styles.List} flex-col gap-5 ${
        open ? "flex" : "hidden"
      }`}>
        {menu.map((item) => (
          <>
            <Link href={item.path}>
              <>
                <span className={`flex items-center gap-2`}>
                  {item.icon} {item.name}
                </span>
              </>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
