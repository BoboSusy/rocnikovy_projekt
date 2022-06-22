import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client"
import "./Cultures.css"


export default function Cultures() {
const { id } = useParams();
    const CULTURE = gql`
    {
      culture(id:${id}){
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
    const { data, error, loading } = useQuery(CULTURE)

    if (loading) return <p>Page is loading ...</p>
    else if (error) return <p>There was an error with this data.</p>


    return (
        <Container center="true">
            <div className="city">
                <h2>{data.culture.data.attributes.title}</h2>
                <Carousel className="carousel">
                    {data.culture.data.attributes.fotogalery.data.map(item => (
                        <Carousel.Item key={item.id}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    className="img"
                                    src={`http://localhost:1337${item.attributes.url}`}
                                    alt="First slide"
                                />
                            </a>
                        </Carousel.Item>
                    ))
                    }
                </Carousel>
                <p>{data.culture.data.attributes.description}</p>
            </div>
        </Container>
    );
}