import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client"
import "./Cities.css"

export default function City() {
const { id } = useParams();
    const CITY = gql`
    {
        category(id:${id}){
           data {
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
    const { data, error, loading } = useQuery(CITY)

    if (loading) return <p>Page is loading ...</p>
    else if (error) return <p>There was an error with this data.</p>


    return (
        <Container center="true">
            <div className="city">
                <h2>{data.category.data.attributes.title}</h2>
                <Carousel className="carousel">
                    {data.category.data.attributes.fotogalery.data.map(item => (
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
                <p>{data.category.data.attributes.description}</p>
            </div>
        </Container>
    );
} 