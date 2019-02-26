import React from 'react'

import ImmflyImg from '@assets/images/immfly.png'
import PokemonImg from '@assets/images/pokemon.png'

import styles from './Header.scss'

const Header = ({ count }) => (
  <header className={styles.container}>
    <img className={styles.immfly} src={ImmflyImg} />
    <img className={styles.pokemon} src={PokemonImg} />
    <h3>Generation 1</h3>
    <h4>{count} pokemon</h4>
  </header>
)

export default Header
