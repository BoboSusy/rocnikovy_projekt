import React from "react"
import "./History.css"
import {useQuery, gql} from "@apollo/client"
import { Carousel, Container } from "react-bootstrap";
import ReactMarkdown from 'react-markdown'

export default function History() {

    const HISTORY = gql`
    query {
        history{
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
              images{
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

  const {data, error, loading} = useQuery(HISTORY)

  if (loading) return <p>Page is loading ...</p>
  else if (error) return <p>There was an error with this data.</p>

  return(
    <Container center="true">
        <div className="history">
            <h1>{data.history.data.attributes.title}</h1>
            <Carousel className="carousel">
        { data.history.data.attributes.fotogalery.data.map(ban => (
            <Carousel.Item key={ban.id}>
                <a href={ban.link} target="_blank" rel="noopener noreferrer">
                    <img
                    className="img"
                    src={`http://localhost:1337${ ban.attributes.url }`}
                    alt="First slide"
                    />
                </a>
            </Carousel.Item>
        )) 
        }  
      </Carousel>
      <ReactMarkdown>{data.history.data.attributes.description}</ReactMarkdown>
      <Carousel className="carousel">
        { data.history.data.attributes.images.data.map(ban => (
            <Carousel.Item key={ban.id}>
                <a href={ban.link} target="_blank" rel="noopener noreferrer">
                    <img
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