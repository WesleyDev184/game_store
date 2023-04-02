import { useEffect, useState } from 'react'
import {
    ContainerSideBar,
    LogoContainer,
    MenuContainer,
    MenuItem
} from './style'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import SideBarMenu from './SideBarMenu'
import { getScreenDimensions } from '../../utils/GetScreenDimensions'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/Logo.png'

const SideBarComponent = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true)
    const [pageWidth, setPageWidth] = useState(0)

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
                        {SideBarMenu.map(item => {
                            return (
                                <MenuItem
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
                    </MenuContainer>
                    <button onClick={handleSideBar}>
                        {isSideBarOpen ? <GrClose /> : <FiMenu />}
                    </button>
                </ContainerSideBar>
            ) : (
                <h1>test</h1>
            )}
        </>
    )
}

export default SideBarComponent
