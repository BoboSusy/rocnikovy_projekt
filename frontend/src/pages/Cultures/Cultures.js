import React from "react"
import Card from "react-bootstrap/Card"
import "./Cultures.css"
import { useQuery, gql } from "@apollo/client"
import { Carousel, Container, Button, } from "react-bootstrap";

export default function Cultures() {

  const CULTURES = gql`
  {
    cultures{
      data{
        id
        attributes{
          title
          description
          icon{
            data{
              attributes{
                url
              }
            }
          }
          fotogalery{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
}
    `

  const { data, error, loading } = useQuery(CULTURES)

  if (loading) return <p>Page is loading ...</p>
  else if (error) return <p>There was an error with this data.</p>

  return (
    <Container center="true">
      <div className="container-cultures">
        {data.cultures.data.map((item) => {
          return (
            <div className="culture" key={item.attributes.title}>
              <Card bg="dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" className='logo mid-pic' src={"http://localhost:1337" + item.attributes.icon.data.attributes.url} alt="Culture icon" />
                <Card.Body>
                  <Card.Title className="h1">{item.attributes.title}</Card.Title>
                  <Button variant="primary" href={`/cultures/${item.id}`}>Podrobnosti</Button>
                </Card.Body>
              </Card>
            </div>
          )
        })}

      </div>
    </Container>
  )
}