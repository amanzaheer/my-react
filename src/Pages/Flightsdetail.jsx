import React from 'react'
import Layout from '../Components/Layout'
import Topboxes from '../Components/Flightscomponents/Topboxes'
import Semidetail from '../Components/Flightscomponents/Semidetail'
import Carddropdown from '../Components/Flightscomponents/Carddropdown'
import Flightpolicy from '../Components/Flightscomponents/Flightpolicy'
import Flightpolicy2 from '../Components/Flightscomponents/Flightpolicy2'
import Flightcard from '../Components/Flightscomponents/Flightcard'

export default function Flights() {
  return (
    <Layout>
      <Topboxes />
      <Semidetail/>
      <Carddropdown/>
      <Flightpolicy/>
      <Flightpolicy2/>
      <Flightcard/>
      
    </Layout>
  )
}
