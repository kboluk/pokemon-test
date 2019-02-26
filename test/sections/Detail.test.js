/* global describe, it */
import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import { UnwiredDetail } from '@sections/Detail'
import DetailCard from '@sections/Detail/components/DetailCard'
import Loader from '@shared/components/Loader'

import mockDetails from '../mock/mockDetails'

describe('Pokemon Detail Page', () => {
  it('calls fetchDetail when initialized without a details object and renders Loader', () => {
    const fetchDetail = sinon.fake()
    const DetailWrapper = shallow(<UnwiredDetail
      fetchDetail={fetchDetail}
      loading={false}
    />)
    expect(DetailWrapper.equals(<Loader />)).to.equal(true)
    expect(fetchDetail.callCount).to.equal(1)
  })
  it('renders Detailcard when provided with a details object', () => {
    const DetailWrapper = shallow(<UnwiredDetail
      details={mockDetails}
    />)
    expect(DetailWrapper.equals(<DetailCard details={mockDetails} />)).to.equal(true)
  })
})
