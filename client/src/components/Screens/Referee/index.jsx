import { useState } from "react";
import React from "react";
import { handleSignup} from "../../axios";
import {Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";
import Card from 'react-bootstrap/Card';

const Ref = () => {
  

  const [error, setError] = useState("");
  const navigate = useNavigate();

  

  return (
    <>
      <div className="container mt-5 mt-lg-1 referee-container">
        <h3 className="text-center text-white mt-4">Feferee List</h3>
        <div className="">
<div className="row">
  <div className="col-md-4 col-lg-3 mb-5">
  <Link to='/referee/2'>
  <Card >
      <Card.Img variant="top" src="https://via.placeholder.com/30x20" />
      <Card.Body>
        <Card.Title>Referee Name</Card.Title>
        <Card.Text>
          rating
        </Card.Text>
        
      </Card.Body>
    </Card>
  </Link>
  </div>

  <div className="col-md-4 col-lg-3 mb-5">
  <Card >
      <Card.Img variant="top" src="https://via.placeholder.com/30x20" />
      <Card.Body>
        <Card.Title>Referee Name</Card.Title>
        <Card.Text>
          rating
        </Card.Text>
        
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4 col-lg-3 mb-5">
  <Card >
      <Card.Img variant="top" src="https://via.placeholder.com/30x20" />
      <Card.Body>
        <Card.Title>Referee Name</Card.Title>
        <Card.Text>
          rating
        </Card.Text>
        
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4 col-lg-3 mb-5">
  <Card >
      <Card.Img variant="top" src="https://via.placeholder.com/30x20" />
      <Card.Body>
        <Card.Title>Referee Name</Card.Title>
        <Card.Text>
          rating
        </Card.Text>
        
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4 col-lg-3 mb-5">
  <Card >
      <Card.Img variant="top" src="https://via.placeholder.com/30x20" />
      <Card.Body>
        <Card.Title>Referee Name</Card.Title>
        <Card.Text>
          rating
        </Card.Text>
        
      </Card.Body>
    </Card>
  </div>

  
  
  
</div>
        </div>
      </div>
    </>
  )
};

export default Ref
