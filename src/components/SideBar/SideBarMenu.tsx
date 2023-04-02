import { ReactNode } from 'react'
import {
    FaHome,
    FaSearch,
    FaHeart,
    FaGamepad,
    FaNewspaper
} from 'react-icons/fa'

interface SideBarMenuProps {
    title: string
    path: string
    icon: ReactNode
}

const SideBarMenu: SideBarMenuProps[] = [
    {
        title: 'Home',
        path: '/',
        icon: <FaHome />
    },
    {
        title: 'Search',
        path: '/search',
        icon: <FaSearch />
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <FaHeart />
    },
    {
        title: 'MyGames',
        path: '/games',
        icon: <FaGamepad />
    },
    {
        title: 'News',
        path: '/news',
        icon: <FaNewspaper />
    }
]

export default SideBarMenu
