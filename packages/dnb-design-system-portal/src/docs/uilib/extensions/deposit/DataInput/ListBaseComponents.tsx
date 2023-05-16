import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ListSummaryFromEdges from '../../../../../shared/parts/ListSummaryFromEdges'

export default function ListBaseComponents() {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          frontmatter: {
            title: { ne: null, nin: "Fragments" }
            draft: { ne: true }
            baseComponent: { eq: true }
          }
          internal: { contentFilePath: { glob: "**/uilib/extensions/deposit/DataInput/**/*" } }
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
