import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container} from 'react-bootstrap';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
        wordpressWpApiMenusMenusItems(name: { eq: "Main Menu" }) {
          items {
            title
            object_slug
          }
        }
      }
    `}
    render={data => (
      <header style={{ background: `#26262b`, marginBottom: `1.45rem`, }} >
        <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, display: `flex`, justifyContent: `space-between`, alignItems: `center`, }} >
          <h1 style={{ margin: 0 }}>
            <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
              dFresh
            </Link>
          </h1>
          <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug} style={{ margin: `0 10px` }}>
                <Link to={`/${item.object_slug}`} style={{ color: `white`, textDecoration: `none`, }} >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Container fluid style={{width: "15%"}}>
			<Form>
  				<Form.Group controlId="formBasicEmail">
    				<Form.Label class="text-white">Lietotājvārds</Form.Label>
   						 <Form.Control type="username" placeholder="Ievadiet lietotājvārdu" />
    						<Form.Text className="text-muted">
      							Mēs nekad nedalīsimies ar jūsu datiem.
    						</Form.Text>
 				 </Form.Group>
  				<Form.Group controlId="formBasicPassword">
    				<Form.Label class="text-white">Parole</Form.Label>
   						 <Form.Control type="password" placeholder="Parole" />
 				 </Form.Group>
   				<div class="text-white">
  					<Form.Group controlId="formBasicCheckbox">
   						 <Form.Check  type="checkbox" label="Atcerēties" />
 					 </Form.Group>
 				</div>
  				<div class="pb-2">
  				<div class="row justify-content-center">
  					<Button variant="outline-warning" type="submit">
   						 Pieslēgties
 					 </Button>
 					 </div>
 				</div>
			</Form>
		</Container>
      </header>
    )}
  />
)
export default Header