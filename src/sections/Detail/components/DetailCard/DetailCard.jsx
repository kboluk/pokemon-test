import React from 'react'
import { Link } from 'react-router-dom'
import styles from './DetailCard.scss'

const DetailCard = ({ details, sprite }) => {
  const { id, types, height, abilities, name } = details
  return (
    <article className={styles.card}>
      <Link
        to='/pokemon'
        className={styles.link}
      >X</Link>
      <figure className={styles.figure}>
        <img src={sprite} />
        <figcaption className={styles.caption}>{name}</figcaption>
      </figure>
      <dl className={styles.deflist}>
        <dt>ID:</dt>
        <dd>{id}</dd>
        <dt>Types:</dt>
        <dd>{types.map(({ type: { name } }) => name).join(', ')}</dd>
        <dt>Height:</dt>
        <dd>{height}</dd>
        <dt>Abilities:</dt>
        <dd>
          <ul className={styles.abilities}>
            {
              abilities.map(({ ability: { name }, slot }) => <li key={slot}>{name}</li>)
            }
          </ul>
        </dd>
      </dl>
    </article>
  )
}

export default DetailCard
