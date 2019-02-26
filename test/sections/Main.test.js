/* global describe, it */
import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import { Listing } from '@sections/Main'
import Pokedex from '@sections/Main/components/Pokedex'
import Loader from '@shared/components/Loader'

describe('Main Listing Page', () => {
  it('calls fetchList when initialized with an empty list and renders Loader', () => {
    const fetchList = sinon.fake()
    const ListingWrapper = shallow(<Listing
      fetchList={fetchList}
      list={[]}
      loading={false}
    />)
    expect(ListingWrapper.equals(<Loader />)).to.equal(true)
    expect(fetchList.callCount).to.equal(1)
  })
  it('renders Pokedex when provided with a non-empty list', () => {
    const mockList = [{
      name: 'bulbasaur',
      image: 'https://www.pkparaiso.com/imagenes/xy/sprites/animados/bulbasaur.gif'
    }]
    const ListingWrapper = shallow(<Listing
      list={mockList}
    />)
    expect(ListingWrapper.equals(<Pokedex list={mockList} />)).to.equal(true)
  })
})
