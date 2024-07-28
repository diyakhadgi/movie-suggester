import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import MyNavbar from "../components/MyNavbar";
import { Button, Card, Container } from "react-bootstrap";

export default function ViewMovie() {
  const getParams = useParams();
  const getID = getParams.id;
  const [movieData, setMovieData] = useState({});

  // first time component is rendered

  useEffect(() => {
    getSingleMovieInfo();
  }, []);

  // everytime each component is changed/updated

  // useEffect(() => {

  // })

  // each time the dependencies are updated / changed

  // useEffect(() => {

  // }, [movieData])

  const getSingleMovieInfo = async () => {
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movie/${getID}`
      );
      setMovieData(response.data.singleMovieData);
    } catch {
      alert("Error occured");
    }
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <h1 className="text-info">{movieData.name}</h1> <br />
        <Card>
          <Card.Body>
            Info: {movieData.info} <br /> <br />
            Description: {movieData.desc} <br /> <br />
            Image: <br /> <br />
            <img src={movieData.image} alt="" style={{ height: "200px" }} />
            <br /> <br />
            Rating: {movieData.rating} <br /><br />
            <Link to="/"><Button variant="dark" >Go back</Button></Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
