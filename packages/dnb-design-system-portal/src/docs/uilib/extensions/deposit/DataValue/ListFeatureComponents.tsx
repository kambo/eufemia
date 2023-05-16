import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ListSummaryFromEdges from '../../../../../shared/parts/ListSummaryFromEdges'

export default function ListFeatureComponents() {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          frontmatter: {
            title: { ne: null, nin: "Fragments" }
            draft: { ne: true }
            baseComponent: { ne: true }
          }
          internal: { contentFilePath: { glob: "**/uilib/extensions/deposit/DataValue/**/*" } }
        }
        sort: { fields: [frontmatter___order, frontmatter___title] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `)

  return <ListSummaryFromEdges edges={edges} />
}
