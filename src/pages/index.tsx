import Head from 'next/head'
import { Container, ContentDiv } from '@/styles/pages/indexStyle'

const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
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
                <ContentDiv>
                    <h1>Hello world</h1>
                </ContentDiv>
            </Container>
        </>
    )
}

export default Home
