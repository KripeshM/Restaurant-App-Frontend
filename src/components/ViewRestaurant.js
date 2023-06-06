import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from './base_url';
import axios from 'axios';
import { Col, Image, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';




function ViewRestaurant() {
  const [restDetails, setRestDetails] = useState({})
  //destructuring - use id instead of pathParams
  // const pathParams=useParams()
  // console.log(pathParams);
  const { id } = useParams()
  console.log(id);

  //api call for fetch [articular restaurant details
  const fetchData = async () => {
    const { data } = await axios.get(`${base_url}/restaurants/${id}`)
    // console.log(data);
    setRestDetails(data)

  }
  console.log(restDetails);
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {
       restDetails?
        <Row>
        <Col sm={12} md={3}>
          <Image className='border rounded p-2 ' src={`${restDetails?.photograph}`} fluid></Image>
        </Col>
        <Col md={8}>
          <h2>{restDetails?.name}</h2>
          <h5>{restDetails?.neighborhood}</h5>
          <ListGroup>
            <ListGroup.Item>Cuisine :  {restDetails?.cuisine_type}</ListGroup.Item>
            <ListGroup.Item><RestOp op={restDetails?.operating_hours}/></ListGroup.Item>
            <ListGroup.Item><RestReview review={restDetails?.reviews}/></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>:''
      }
      
      
    </div>
  )
}

export default ViewRestaurant