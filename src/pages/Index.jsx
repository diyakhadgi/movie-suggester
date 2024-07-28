import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MyNavbar from "../components/MyNavbar";
import SingleMovie from "../components/SingleMovie";
import { Row, Spinner } from "react-bootstrap";

export default function Index() {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [searchMovieText, setSearchMovieText] = useState("");

  const [firstRun, setFirstRun] = useState(true);
  const [searchErrorText, setSearchErrorText] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovie();
  }, []);

  useEffect(() => {
    if (!firstRun) {
      // searching code

      const fetchTimer = setTimeout(() => {
        if (searchMovieText && searchMovieText.length > 2) {
          fetchMovie();
        } else if (searchMovieText.length < 1) {
          fetchMovie();
        } else {
          setSearchErrorText("Please enter atleast 3 characters for searching");
          setSearchErrorText(true);
        }
      }, 500);

      return () => {
        clearTimeout(fetchTimer);
      };
    }
  }, [searchMovieText]);

  const fetchMovie = async () => {
    setLoading(true);
    // fetch resource
    setSearchErrorText("");
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movies?search=${searchMovieText}`
      );

      setMovies(response.data.moviesData);
      setIsError(false);
      setLoading(false);
      setFirstRun(false);
    } catch (error) {
      setIsError(true);
      setErrorText("Cannot get movie info");
      setFirstRun(false);
    }
  };
  return (
    <>
      <MyNavbar/>
      
      <input class="form-control" type="text" placeholder="Type movie title" aria-label="default input example" value={searchMovieText} onChange={(e) => setSearchMovieText(e.target.value)} />
      
      <span style={{ color: "red" }}>{searchErrorText}</span>
      <div>
        {isError ? (
          <>
            <div style={{ background: "red", padding: "10px", margin: "5px" }}>
              {errorText}
            </div>
          </>
        ) : (
          <>
            <div
              style={{ background: "#e7e7e7", padding: "10px", margin: "10px" }}
            >
                <div>{loading ? <>
                  <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
                </> : <></>}</div>
              {!loading && movies.length < 1 ? (
                <>No movies found</>
              ) : (
                    <>
                      <Row>
                  {movies.map((el) => (
                    <SingleMovie data={el} />
                  ))}
                        </Row>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
