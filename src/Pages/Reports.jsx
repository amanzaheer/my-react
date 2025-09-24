import React from 'react'
import Layout from '../Components/Layout'
import Table from '../Components/Reports/Table'
import Topboxes from '../Components/Flightscomponents/Topboxes'

export default function Reports() {
  return (
    <Layout>
    <div>
      <Topboxes/>
    <Table/>
    </div>
    </Layout>
  )
}
