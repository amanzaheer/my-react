import React from 'react'
// import Layout from '../Components/Layout'
import Table from '../Components/Couponscomponent/Table'
import Topboxes from '../Components/Flightscomponents/Topboxes'
import Layout from '../Components/Layout'

export default function Coupons() {
  return (
    <Layout>
      <div>
        <Topboxes/>
    <Table/>
      </div>
   
    </Layout>
  )
}
