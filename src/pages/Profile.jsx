import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MyNavbar from "../components/MyNavbar";
import { Button, Container } from "react-bootstrap";

export default function Profile() {
  const [userData, setUserData] = useState({});
  const history = useHistory();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const getAccessToken = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(
        "https://api.dynoacademy.com/test-api/v1/me",
        {
          timeout: 1000,
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );

      setUserData(response.data.data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.errors[0].message);
      } 
    }
  };

  const onLogout = () => {
    localStorage.removeItem("accessToken");
    history.push("/");
  };
  return (
    <>
      <MyNavbar />
      
      <Container className="mt-1">
      Name : {userData.name} <br />
      Email : {userData.email} <br />
      Country : {userData.country} <br />
      <Button variant="danger" type="button" onClick={onLogout}>
        Logout
      </Button>
        </Container>
    </>
  );
}
