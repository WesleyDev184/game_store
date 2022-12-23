import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';

export const menu = [
  {
    name: 'Busca',
    icon: <SearchRoundedIcon />,
    path: '/search',
  },
  {
    name: 'Favoritos',
    icon: <FavoriteRoundedIcon />,
    path: '/favoritos',
  },
  {
    name: 'News',
    icon: <FeedRoundedIcon />,
    path: '/news',
  },
];

export const categoryMenu = [
  {
    name: 'Action',
    path: '/action',
  },
  {
    name: 'Indie',
    path: '/indie',
  },
  {
    name: 'Adventure',
    path: '/adventure',
  },
  {
    name: 'RPG',
    path: '/RPG',
  },
  {
    name: 'Strategy',
    path: '/strategy',
  },
];
