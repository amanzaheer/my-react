import React from 'react'
import Layout from '../Components/Layout'
import Topboxes from '../Components/Flightscomponents/Topboxes'
import Customertabel from '../Components/Customerscomponent/Customertabel'

export default function Customers() {
  return (
    <Layout>
      <div className="p-2">
        <Topboxes/>
        <Customertabel/>
      </div>
    </Layout>
  )
}
