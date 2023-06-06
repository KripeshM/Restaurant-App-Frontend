import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from '../RestaurantCard'
import { base_url } from '../base_url'



function Allrestaurants() {
  //state for holding all restaurant arrays
  const [allItems,setAllItems]=useState([])
  //code for api calls
  const fetchData=async()=>{
    const response=await axios.get(`${base_url}/restaurants`)
    // console.log(response.data);
    setAllItems(response.data)
  }
  console.log(allItems);//array of 10 items

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <Row>
      {
      allItems.map(item=>(
        <Col sm={12} md={6} lg={4} xl={3}>
          {/* destructuring */}
          <RestaurantCard restaurants={item}/>
          
        </Col>
      ))
      }
      </Row>
  )
}

export default Allrestaurants