import React from 'react'
import { connect } from 'react-redux'

import Loader from '@shared/components/Loader'
import DetailCard from './components/DetailCard'

export class Detail extends React.PureComponent {
  componentDidMount () {
    const { fetchDetail, details } = this.props
    if (!details) fetchDetail()
  }
  render () {
    const { loading, sprite, details } = this.props
    if (!details || loading) {
      return <Loader />
    }
    return <DetailCard details={details} sprite={sprite} />
  }
}

const mapState = (state, props) => {
  const { match } = props
  const { loading, sprites } = state
  if (match && match.params && match.params.pokemon) {
    return {
      details: state[`pokemon:${match.params.pokemon}`],
      sprite: sprites[match.params.pokemon],
      loading
    }
  }
  return { loading }
}
const mapDispatch = (dispatch, props) => ({ fetchDetail: () => dispatch({ type: 'FETCH_DETAIL_INIT', payload: props.match }) })

export default connect(mapState, mapDispatch)(Detail)
