import Image from 'next/image'

type CardProps = {
    name: string
    imageUrl: string
}

const Card = ({ name, imageUrl }: CardProps) => {
    return (
        <div>
            <Image src={imageUrl} alt={name} width={300} height={200} />
            <h2>{name}</h2>
        </div>
    )
}

export default Card
