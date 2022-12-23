import Link from 'next/link';
import Image from 'next/image';
import { menu, categoryMenu } from './sideBarMenu';
import logo from '../../public/GameStoreLogo.png';
import styles from '../../styles/SideBar.module.css';
import { CategoryRounded } from '@mui/icons-material';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const SideBar = () => {
  return (
    <div className={`${styles.sideContainer} w-full h-full`}>
      <div className={`${styles.LogoContainer} pb-2`}>
        <div className={`flex items-center flex-col justify-center`}>
          <Image src={logo} alt="Game Store Logo" width={50} height={50} />
          <h5 className={`${styles.title} mt-2 text-2xl`}>Game Store</h5>
        </div>
      </div>
      <div className={`${styles.List} flex-col gap-8 flex items-center`}>
        {menu.map((item) => (
          <>
            <Link href={item.path} className={`flex w-28`}>
              <>
                <span className={`flex items-center gap-2`}>
                  {item.icon} {item.name}
                </span>
              </>
            </Link>
          </>
        ))}
      </div>
      <div className={`flex-col gap-8 flex items-center`}>
        <div>
          <Link href={'/Categorys'} className={`flex`}>
            <>
              <span className={`flex items-center gap-2`}>
                <CategoryRounded /> Categorias <NavigateNextRoundedIcon />
              </span>
            </>
          </Link>
        </div>
        <div className={`flex-col gap-5 flex items-center mt-3`}>
          {categoryMenu.map((item) => (
            <>
              <Link href={item.path} className={`flex w-28`}>
                <>
                  <span className={`flex items-center gap-2`}>{item.name}</span>
                </>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
