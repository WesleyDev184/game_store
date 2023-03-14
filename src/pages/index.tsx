import Head from 'next/head'
import { useTheme } from '@/contexts/ThemeProviderContext'
import { Container } from '@/styles/pages/indexStyle'

const Home = () => {
    const { toggleTheme } = useTheme()
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <h1>Hello World</h1>
                <button onClick={toggleTheme}>changeTheme</button>
            </Container>
        </>
    )
}

export default Home
