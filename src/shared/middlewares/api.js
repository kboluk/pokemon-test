/* global fetch */
const fetchPokeDex = async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_ROUTE}/pokedex/2`)
    if (response.ok) {
      const payload = await response.json()
      dispatch({ type: 'FETCH_LIST_SUCCESS', payload })
    } else {
      throw new Error('UNKOWN ERROR')
    }
  } catch (error) {
    dispatch({ type: 'FETCH_LIST_FAIL', error: error.message })
  }
}

const fetchPokemon = async (dispatch, payload) => {
  if (!payload || !(payload.params && payload.params.pokemon)) {
    return dispatch({ type: 'FETCH_DETAIL_FAIL', error: 'NO MATCH' })
  }
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_ROUTE}/pokemon/${payload.params.pokemon}`)
    if (response.ok) {
      const details = await response.json()
      dispatch({ type: 'FETCH_DETAIL_SUCCESS', payload: details })
    } else {
      throw new Error('UNKOWN ERROR')
    }
  } catch (error) {
    dispatch({ type: 'FETCH_DETAIL_FAIL', error: error.message })
  }
}

const playbook = {
  'FETCH_LIST_INIT': fetchPokeDex,
  'FETCH_DETAIL_INIT': fetchPokemon
}

const apiMiddleware = ({ dispatch }) => next => (action) => {
  const { type, payload } = action
  playbook[type] && playbook[type](dispatch, payload)
  return next(action)
}

export default apiMiddleware
