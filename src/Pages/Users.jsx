import React from 'react'
import Layout from '../Components/Layout'
import Topboxes from '../Components/Flightscomponents/Topboxes'
import Table from '../Components/Userscomponet/Table'

export default function Users() {
  return (
    <Layout>
    <div>
      <Topboxes />
      <Table/>
      

    </div>
    </Layout>
  )
}
