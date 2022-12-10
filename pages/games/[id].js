import { useRouter } from "next/router"

const GameItem = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <h1>test {id}</h1>
        </div>
    )
}

export default GameItem