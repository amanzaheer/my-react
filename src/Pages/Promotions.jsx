import React from 'react'
import Layout from '../Components/Layout'
import Topboxes from '../Components/Flightscomponents/Topboxes'
import Table from '../Components/Promotionscomponent/Table'

export default function Promotions() {
  return (
    <Layout>
    <div>
      <Topboxes/>
      <Table/>
    </div>
    </Layout>
  )
}
``