import Link from 'next/link'
import styles from './Card.module.css'
import { TCard } from 'types/Card'

type CardProps = {
  card: TCard
}
export default function Card({ card }: CardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={'/images' + card.image} alt={card.name} />

      <h3 className={styles.name}>{card.name}</h3>

      <h4 className={styles.short_description}>{card.shortDescription}</h4>

      <Link href={`${card.id}`} passHref>
        <button>Buy ${card.price}</button>
      </Link>
    </div>
  )
}
