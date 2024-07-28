import axios from 'axios';
import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MyNavbar from '../components/MyNavbar';
import { Button, Container, Form } from 'react-bootstrap';

export default function AddMovie() {

  const history = useHistory();

  const movie_name_reference = useRef();
  const rating_referece = useRef();
  const desc_reference = useRef();

  const addMovieHandler = async (e) => {
    e.preventDefault();

    const movieData = {
      movie_name: movie_name_reference.current.value,
      rating: rating_referece.current.value,
      description: desc_reference.current.value
    };

    try {
      const response = await axios.post("https://api.dynoacademy.com/test-api/v1/movies", movieData, {
        timeout: 1000,
      });
      alert(response.data.message);
      history.replace("/");
    } catch (error) {
      
      if (error.response) {
        
        alert(error.response.data.errors[0].message);
      } else {
        alert("Unknown error occured. Try again later")
      }
    }
  }
  return (
    <>
    <MyNavbar/>
      <Container>
        <h3>Add a movie</h3>
        <form action="" onSubmit={addMovieHandler}>
          
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" autoComplete={false} ref={movie_name_reference} />
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Ratings</Form.Label>
        <Form.Control type="number" placeholder="Enter movie rating" autoComplete={false} ref={rating_referece} />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} ref={desc_reference} />
      </Form.Group>
          
          <Button variant="dark" type="submit">
        Add
      </Button>
        </form>
        </Container>
    </>
      );
}
