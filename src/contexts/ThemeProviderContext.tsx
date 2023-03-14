import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState
} from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import themes from '../styles/theme'

interface ThemeContextData {
    toggleTheme(): void
    themeMode: DefaultTheme
}

interface MainProps {
    children: ReactNode
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const CustomThemeProvider = ({ children }: MainProps) => {
    const [themeMode, setThemeMode] = useState<DefaultTheme>(themes.dark)
    const [theme, setTheme] = useState<string>('dark')

    const setMode = (mode: string) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleTheme = useCallback(() => {
        theme === 'dark' ? setMode('light') : setMode('dark')
    }, [theme])

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        localTheme && setTheme(localTheme)
    }, [])

    useEffect(() => {
        theme === 'dark'
            ? setThemeMode(themes.dark)
            : setThemeMode(themes.light)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeContext)
