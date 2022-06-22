import React from "react"
import Card from "react-bootstrap/Card"
import "./Cities.css"
import { useQuery, gql } from "@apollo/client"
import { Carousel, Container, Button, } from "react-bootstrap";

export default function Cities() {

  const CITIES = gql`
  {
    categories{
       data {
         id
         attributes {
          title
          icon{
            data{
              attributes{
                url
              }
            }
          }
          shortDesc
          description
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

  const { data, error, loading } = useQuery(CITIES)

  if (loading) return <p>Page is loading ...</p>
  else if (error) return <p>There was an error with this data.</p>

  return (
    <Container center="true">
      <div className="container-cities">
        {data.categories.data.map((item) => {
          return (
            <div className="city" key={item.attributes.title}>
              <Card bg="dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" className='logo mid-pic' src={"http://localhost:1337" + item.attributes.icon.data.attributes.url} alt="City icon" />
                <Card.Body>
                  <Card.Title className="h1">{item.attributes.title}</Card.Title>
                  <Card.Text className="cards-text">
                    {item.attributes.shortDesc}
                  </Card.Text>
                  <Button variant="primary" href={`/cities/${item.id}`}>Podrobnosti</Button>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
    </Container>
  )
}