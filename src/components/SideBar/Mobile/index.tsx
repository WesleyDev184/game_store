import Link from 'next/link'
import { useRouter } from 'next/router'
import SideBarMenu from '../SideBarMenu'

import { Container, MenuItem, Content, MenuContainer, Wrapper } from './styles'

const MobileSideBar = () => {
    const router = useRouter()

    return (
        <Wrapper>
            <Container>
                <Content>
                    <nav>
                        <MenuContainer>
                            {SideBarMenu.map(item => {
                                return (
                                    <MenuItem
                                        key={item.path}
                                        active={router.asPath === item.path}
                                    >
                                        <Link href={item.path}>
                                            {item.icon}
                                        </Link>
                                    </MenuItem>
                                )
                            })}
                        </MenuContainer>
                    </nav>
                </Content>
            </Container>
        </Wrapper>
    )
}

export default MobileSideBar
