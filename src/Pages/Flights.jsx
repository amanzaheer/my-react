import React from 'react'
import Layout from '../Components/Layout'
import Topboxes from '../Components/Flightscomponents/Topboxes'
import Semidetail from '../Components/Flightscomponents/Semidetail'
import Carddropdown from '../Components/Flightscomponents/Carddropdown'

export default function Flights() {
  return (
    <Layout>
      <Topboxes />
      <Semidetail/>
      <Carddropdown/>
    </Layout>
  )
}
