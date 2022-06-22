import React from "react"
import "./Geography.css"
import {useQuery, gql} from "@apollo/client"
import { Carousel, Container } from "react-bootstrap";

export default function Geography() {
    const GEOGRAPHY = gql`
    query {
        geography {
          data{
            attributes{
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
  const {data, error, loading} = useQuery(GEOGRAPHY)

  if (loading) return <p>Page is loading ...</p>
  else if (error) return <p>There was an error with this data.</p>

  return(
    <Container center="true">
        <div className="geography">
            <h1>{data.geography.data.attributes.title}</h1>
            <p>{data && data.geography.data.attributes.description}</p>
            <Carousel className="carousel">
        { data.geography.data.attributes.fotogalery.data.map(ban => (
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