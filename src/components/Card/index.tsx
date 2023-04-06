import { FaStar, FaXbox, FaPlaystation, FaArrowUp } from 'react-icons/fa'
import { CardBody } from './Styles'
import { FiMonitor } from 'react-icons/fi'
import { useTheme } from 'styled-components'
import { ParentPlatform, Genre } from '../../dtos/IGamesDtos'
import Link from 'next/link'

type CardProps = {
    id: number
    name: string
    imageUrl: string
    rating: number
    platforms: ParentPlatform[]
    genres: Genre[]
    released: Date
}

const Card = ({
    id,
    genres,
    imageUrl,
    name,
    platforms,
    rating,
    released
}: CardProps) => {
    const theme = useTheme()
    const gen = genres.map(g => g.name)
    const plat = platforms.map(p => p.platform.name)
    const date = new Date(released).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

    return (
        <Link href={`/game/${id}`}>
            <CardBody ImageUrl={imageUrl}>
                <div className="star">
                    <section>
                        <span>
                            <FaStar color="#FFFF00" />
                        </span>
                        <span>{rating}</span>
                    </section>
                </div>
                <div className="img"></div>

                <div className="content">
                    <section>
                        <div className="infoContainer">
                            <span className="title">{name}</span>
                            <section className="platforms">
                                {plat.map(p => {
                                    if (p === 'PlayStation') {
                                        return (
                                            <span key={p}>
                                                <FaPlaystation
                                                    color={
                                                        theme.colors.text
                                                            .reverse
                                                    }
                                                />
                                            </span>
                                        )
                                    } else if (p === 'Xbox') {
                                        return (
                                            <span key={p}>
                                                <FaXbox
                                                    color={
                                                        theme.colors.text
                                                            .reverse
                                                    }
                                                />
                                            </span>
                                        )
                                    } else if (p === 'PC') {
                                        return (
                                            <span key={p}>
                                                <FiMonitor
                                                    color={
                                                        theme.colors.text
                                                            .reverse
                                                    }
                                                />
                                            </span>
                                        )
                                    }
                                })}
                            </section>
                            <section className="info">
                                <div>
                                    <span>Release Date</span>
                                    <span>{date}</span>
                                </div>
                                <div>
                                    <span>Genre</span>
                                    <span>{gen[0]}</span>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>

                <div className="arrow">
                    <span>
                        <FaArrowUp />
                    </span>
                </div>
            </CardBody>
        </Link>
    )
}

export default Card
