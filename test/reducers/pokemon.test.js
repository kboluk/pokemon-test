/* global describe, it */
import { expect } from 'chai'

import { pokemon, initialState, spriteUrl } from '@shared/reducers'
import mockDetails from '../mock/mockDetails'
import mockList from '../mock/mockList'

describe('pokemon reducer', () => {
  it('should return the initial state', () => {
    expect(pokemon(undefined, {})).to.equal(initialState)
  })
  it('should handle init actions by setting loading to true', () => {
    expect(pokemon(initialState, { type: 'FETCH_DETAIL_INIT' })).to.include({ loading: true })
    expect(pokemon(initialState, { type: 'FETCH_LIST_INIT' })).to.include({ loading: true })
  })
  it('should handle request fail actions by setting loading to false', () => {
    expect(pokemon({ ...initialState, loading: true }, { type: 'FETCH_DETAIL_FAIL' }))
      .to.include({ loading: false })
    expect(pokemon({ ...initialState, loading: true }, { type: 'FETCH_LIST_FAIL' }))
      .to.include({ loading: false })
  })
  it('should handle details success action', () => {
    expect(pokemon(initialState, { type: 'FETCH_DETAIL_SUCCESS', payload: mockDetails }))
      .to.include({
        loading: false,
        [`pokemon:${mockDetails.name}`]: mockDetails
      })
      .and.to.deep.include({
        sprites: {
          [mockDetails.name]: spriteUrl.get(mockDetails.name)
        }
      })
  })
  it('should handle list success action', () => {
    const mockLength = mockList.pokemon_entries.length
    const newState = pokemon(initialState, { type: 'FETCH_LIST_SUCCESS', payload: mockList })
    expect(newState)
      .to.include({
        loading: false
      })
      .and.to.have.nested.property('list[0].name')
    expect(newState.list).to.have.lengthOf(mockLength)
    expect(Object.keys(newState.sprites)).to.have.lengthOf(mockLength)
  })
})
