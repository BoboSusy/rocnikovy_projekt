import React from "react"
import "./Homepage.css"
import {useQuery, gql} from "@apollo/client"
import { Carousel, Container } from "react-bootstrap";

export default function Homepage() {

  const HOMEPAGE = gql`
  query {
    homepage {
      data {
        attributes {
          title
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

  const {data, error, loading} = useQuery(HOMEPAGE)

  if (loading) return <p>Page is loading ...</p>
  else if (error) return <p>There was an error with this data.</p>

  if (data) console.log(data)
  return (
  <Container center="true">
    <div className="homepage">
        <h1>{data && data.homepage.data.attributes.title}</h1>
        <p>{data && data.homepage.data.attributes.description}</p>
    
      <Carousel className="carousel">
        { data.homepage.data.attributes.fotogalery.data.map(ban => (
            <Carousel.Item key={ban.id}>
                <a href={ban.link} target="_blank" rel="noopener noreferrer">
                    <img c
                    className="img"
                    src={`http://localhost:1337${ ban.attributes.url }`}
                    alt="First slide"
                    />
                </a>
            </Carousel.Item>
        )) 
        }  
      </Carousel>
    </div>
    </Container>
  )
}