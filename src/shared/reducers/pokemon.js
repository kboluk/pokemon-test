export const initialState = {
  loading: false,
  list: [],
  sprites: {}
}

export const spriteUrl = {
  cacheKey: '',
  cacheValue: '',
  get: function getSpriteUrl (name) {
    if (this.cacheKey === name) return this.cacheValue
    const fileName = name.replace('mr-', 'mr._').replace('-', '_')
    this.cacheKey = name
    this.cacheValue = `https://www.pkparaiso.com/imagenes/xy/sprites/animados/${fileName}.gif`
    return this.cacheValue
  }
}

const playbook = {
  'FETCH_LIST_INIT': state => ({ ...state, loading: true }),
  'FETCH_DETAIL_INIT': state => ({ ...state, loading: true }),
  'FETCH_LIST_SUCCESS': (state, { payload }) => {
    if (payload && payload.pokemon_entries) {
      return payload.pokemon_entries.reduce((accumulator, entry) => {
        const { name } = entry.pokemon_species
        accumulator.list.push({
          name,
          image: spriteUrl.get(name)
        })
        accumulator.sprites[name] = spriteUrl.get(name)
        return accumulator
      }, {
        ...state,
        list: [],
        sprites: {},
        loading: false
      })
    }
    return { ...state, loading: false }
  },
  'FETCH_DETAIL_SUCCESS': (state, { payload }) => {
    if (payload && payload.name) {
      if (state.sprites[payload.name]) {
        const { id, types, height, abilities, name } = payload
        return {
          ...state,
          [`pokemon:${payload.name}`]: { id, types, height, abilities, name },
          loading: false
        }
      }
      return {
        ...state,
        sprites: {
          ...state.sprites,
          [payload.name]: spriteUrl.get(payload.name)
        },
        [`pokemon:${payload.name}`]: payload,
        loading: false
      }
    }
    return { ...state, loading: false }
  },
  'FETCH_LIST_FAIL': state => ({ ...state, loading: false }),
  'FETCH_DETAIL_FAIL': state => ({ ...state, loading: false })
}

function pokemon (state = initialState, action) {
  if (playbook[action.type]) {
    return playbook[action.type](state, action)
  }
  return state
}

export default pokemon
