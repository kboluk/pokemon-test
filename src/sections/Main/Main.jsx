import React from 'react'
import { connect } from 'react-redux'

import Loader from '@shared/components/Loader'
import Header from './components/Header'
import Pokedex from './components/Pokedex'

export class Main extends React.PureComponent {
  componentDidMount () {
    const { fetchList, list } = this.props
    if (!list.length) {
      fetchList()
    }
  }
  render () {
    const { loading, list } = this.props
    if (!list.length || loading) {
      return <Loader />
    }
    return (
      <React.Fragment>
        <Header count={list.length} />
        <Pokedex list={list} />
      </React.Fragment>
    )
  }
}

const mapState = ({ list, loading }) => ({ list, loading })
const mapDispatch = dispatch => ({ fetchList: () => dispatch({ type: 'FETCH_LIST_INIT' }) })

export default connect(mapState, mapDispatch)(Main)
