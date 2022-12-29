import React from "react"
import { graphql } from "gatsby"

export default function MyTemplate({ data }) {
  // Usa los datos de Airtable como quieras aquí
  const records = data.allAirtable.edges
  return (
    <div>
      {records.map((record) => (
        <div key={record.node.id}>
          {record.node.data.Name}
          </div>
      ))}
    </div>
  )
}

export const query = graphql`
{
  allAirtable(filter: {table: {eq: "Table 1"}, data: {}}) {
    edges {
      node {
        data {
          Name
          Status
          Notes
        }
      }
    }
  }
}
`