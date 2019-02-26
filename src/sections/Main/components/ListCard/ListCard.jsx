import React from 'react'
import { Link } from 'react-router-dom'
import style from './ListCard.scss'

class ListCard extends React.PureComponent {
  render () {
    const { species } = this.props
    return (
      <Link
        to={`/pokemon/${species.name}`}
        className={style.link}
        style={{
          backgroundImage: `url(${species.image})`
        }}
      >
        <h2 className={style.caption}>
          {species.name}
        </h2>
      </Link>
    )
  }
}

export default ListCard
