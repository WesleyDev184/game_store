import Head from 'next/head'
import { Container, ContentDiv } from '@/styles/pages/indexStyle'
import { IGames, Result } from '@/dtos/IGamesDtos'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Card from '@/components/Card'

const Home = ({
    res
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
                    {res.results.map((r: Result) => (
                        <Card
                            key={r.id}
                            id={r.id}
                            name={r.name}
                            imageUrl={r.background_image}
                            rating={r.rating}
                            platforms={r.parent_platforms}
                            genres={r.genres}
                            released={r.released}
                        />
                    ))}
                </ContentDiv>
            </Container>
        </>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await fetch(
        `${process.env.URL_BASE}/games?key=${process.env.API_KEY}&page_size=5`
    )
    const res: IGames = await data.json()

    return {
        props: {
            res
        }
    }
}
