import * as React from "react"
import { Link, graphql } from "gatsby"
import { Item } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const { title, description } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.nodes
  const social = data.site.siteMetadata?.social
  console.log(social)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={title} description={description}>
        <Seo title="All posts" />
        <Bio />
        <p>表示する記事が存在しません。</p>
      </Layout>
    )
  }

  return (
    <Layout
      location={location}
      title={title}
      description={description}
      social={social}
    >
      <Seo title="All posts" />
      {/* <Bio /> */}
      <Item.Group link relaxed="very" unstackable>
        {posts.map(post => (
          <Item as="article" key={post.fields.slug}>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
            />
            <Item.Content>
              <Item.Header>
                <Link to={post.fields.slug} itemProp="url">
                  {post.frontmatter.title}
                </Link>
              </Item.Header>
              <Item.Meta>{post.frontmatter.date}</Item.Meta>
              <Item.Extra>カテゴリ</Item.Extra>
              {/* <Item.Description>{paragraph}</Item.Description> */}
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        social {
          twitter
          github
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
        }
      }
    }
  }
`
