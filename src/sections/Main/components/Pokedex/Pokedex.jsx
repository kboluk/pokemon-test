import React from 'react'
import ListCard from '../ListCard'

import style from './Pokedex.scss'

const Pokedex = ({ list = [] }) => (
  <nav className={style.pokedex}>
    {
      list.map(species => <ListCard key={species.name} species={species} />)
    }
  </nav>
)

export default Pokedex
