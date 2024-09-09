import React from 'react'
import '../Styles/Single.css'
import { useParams } from 'react-router'
import data from '../data/db.json'

import { BsCake2 } from "react-icons/bs";
import { FaRegCompass } from "react-icons/fa";
import { GiStairs } from "react-icons/gi";
import { BiSolidArea } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

function SingleOne() {

  const { id } = useParams()
  console.log(id)
  const item = data.buy.find(element => element.pID === parseInt(id))
  console.log(item)

  return (

    <div className='single-p'>

      <h2>{item.bhk} BHK {item.type} for sale in {item.place}</h2>

      <div className="img-flex">
        <img alt="property image" src={item.img} />
        <div className='desc'>
          <h3 id="des">Description</h3>
          <p id="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit culpa nihil sunt officia illo fugit vero dolore ratione, possimus esse distinctio autem architecto veritatis impedit cupiditate ex, reprehenderit labore blanditiis accusamus consequuntur magnam. Quo odit dolor accusantium reprehenderit? Vero, voluptates. Aperiam eos quo molestias ab delectus. Consequuntur doloribus, numquam possimus labore placeat ratione architecto maxime quo laboriosam! Veniam, alias optio.</p>
          <h3 id="des">Price</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>{item.price}</p>
          <button id="contact">Contact owner</button>
          <h3 id="des" style={{cursor:'pointer'}}>Calculate EMI?</h3>
        </div>
      </div>


      <div className="overview">
        <span><BsCake2 color='grey' size={25} /> Age of property -  {item.age} </span>
        <span><FaRegCompass color='grey' size={25} /> Facing - {item.facing} </span>
        <span><GiStairs color='grey' size={25} /> Floor - {item.floor} </span>
      </div>

      <div className="overview2">
        <span><BiSolidArea color='grey' size={25} /> Carpet Area -  {item.area} </span>
        <span><FaRegBuilding color='grey' size={25} /> Number of bedrooms - {item.bhk} </span>
        <span><FaCar color='grey' size={25} /> Parking - Yes </span>
      </div>


    </div>

  )
}

export default SingleOne


