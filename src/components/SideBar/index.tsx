import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
    ContainerSideBar,
    LogoContainer,
    MenuContainer,
    MenuItem,
    HandleThemeDiv,
    HideSideBar
} from './style'
import {
    FaSun,
    FaMoon,
    FaArrowAltCircleLeft,
    FaArrowAltCircleRight
} from 'react-icons/fa'
import SideBarMenu from './SideBarMenu'
import { getScreenDimensions } from '../../utils/GetScreenDimensions'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/Logo.png'
import { useTheme } from '@/contexts/ThemeProviderContext'
import MobileSideBar from './Mobile'

const SideBarComponent = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true)
    const [pageWidth, setPageWidth] = useState(0)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const { toggleTheme } = useTheme()
    const router = useRouter()

    const handleTheme = () => {
        setIsDarkMode(!isDarkMode)
        toggleTheme()
    }

    const handleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }

    const { width } = getScreenDimensions()

    useEffect(() => {
        setPageWidth(width)
    }, [])

    return (
        <>
            {pageWidth > 768 ? (
                <ContainerSideBar isSideBarOpen={isSideBarOpen}>
                    <LogoContainer isSideBarOpen={isSideBarOpen}>
                        <Image src={Logo} alt="Logo" />
                        <h2>Game Store</h2>
                    </LogoContainer>
                    <MenuContainer>
                        <ul>
                            {SideBarMenu.map(item => {
                                return (
                                    <MenuItem
                                        activeRouter={
                                            router.asPath === item.path
                                        }
                                        isSideBarOpen={isSideBarOpen}
                                        key={item.title}
                                    >
                                        <Link href={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </MenuItem>
                                )
                            })}
                        </ul>
                        <HandleThemeDiv onClick={handleTheme}>
                            {isDarkMode ? <FaMoon /> : <FaSun />}
                        </HandleThemeDiv>
                    </MenuContainer>
                    <HideSideBar onClick={handleSideBar}>
                        {isSideBarOpen ? (
                            <span>
                                Hide <FaArrowAltCircleLeft />
                            </span>
                        ) : (
                            <FaArrowAltCircleRight size={25} />
                        )}
                    </HideSideBar>
                </ContainerSideBar>
            ) : (
                <MobileSideBar />
            )}
        </>
    )
}

export default SideBarComponent
