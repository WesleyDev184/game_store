import { CustomThemeProvider } from '@/contexts/ThemeProviderContext'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import SideBarComponent from '@/components/SideBar'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CustomThemeProvider>
            <SideBarComponent />
            <Component {...pageProps} />
            <GlobalStyle />
        </CustomThemeProvider>
    )
}
