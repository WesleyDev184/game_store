import { useRouter } from 'next/router'

const GameDetails = () => {
    const router = useRouter()
    return (
        <div>
            <h1>Game Details</h1>
            <p>{router.query.id}</p>
        </div>
    )
}

export default GameDetails
