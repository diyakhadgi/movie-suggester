import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


export default function SingleMovie(props) {
  return (
    <>
      <Col key={props.data.id}>
      <Card style={{ width: '16rem',minHeight:"700px"}}>
          <Card.Img variant="top" src={props.data.image}  style={{maxWidth:"200px", marginLeft:"20px"}}/>
      <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
          {props.data.info}
        </Card.Text>
        <Link to={`/view_movie/${props.data.id}`}>
            <Button variant="dark">View Details</Button> </Link>
      </Card.Body>
        </Card>
        
     {/* <div>
                      <Link to={`/view_movie/${props.data.id}`}>
                        <span style={{ fontWeight: "bold" }}>{props.data.name}</span>
                      </Link>
                      <br />
                      <br />
                      <img
                        src={props.data.image}
                        alt="Movie image"
                        style={{ height: "100px" }}
                      />
                      <br />
                      Info: {props.data.info}
                      <br />
                      <br />
                      Rating: {props.data.rating ? props.data.rating : "0"}
        </div> */}
        </Col>
    </>
  )
}
