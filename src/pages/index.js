import React from "react"
import { graphql, Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from 'react-bootstrap';

const IndexPage = ({ data }) => (
  <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul style={{ listStyle: "none" }}>
      {data.allWordpressPost.edges.map(post => (
        <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
          <Link to={`/post/${post.node.slug}`} style={{ display: "flex", color: "black", textDecoration: "none" }} >
            {post.node.featured_media && <img src={post.node.featured_media.localFile.url} alt={post.node.title} style={{ width: "25%", marginRight: 20 }} />}
            <div style={{ width: "75%" }}>
              <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} style={{ marginBottom: 0 }} />
              <p style={{ margin: 0, color: "grey" }}>
                Written by {post.node.author.name} on {post.node.date}
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
  </Container>
)
export default IndexPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          author {
            id
          }
          featured_media {
            localFile {
              url
            }
          }
          date(formatString: "MMMM DD, YYYY")
          
        }
      }
    }
  }
`