import React from 'react'
import { Button, Divider } from '@mui/material'
import '../Styles/SearchBar.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdKeyboardVoice } from "react-icons/md";
import { filteredList } from '../redux/EstatelyReducer'

import data from '../data/db.json'


function SearchBar() {

  const [active, setActive] = useState('')
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useState('')
  const dispatch = useDispatch()
  const list = useSelector((state) => state.estately.filteredList)

  const searchProperty = () => {
    const filtered = active === 'buy'
      ? data?.buy?.filter(d => d.type.toLowerCase() === searchParam || d.place.toLowerCase() === searchParam)
      : data?.rent?.filter(d => d.type.toLowerCase() === searchParam || d.place.toLowerCase() === searchParam);

    dispatch(filteredList(filtered));
    navigate(`/${active}`);
  };


  return (
    <>

      <div className="search-container">
        <div className='searchbar'>
          <div>
            <span onClick={() => setActive("buy")} className={active === "buy" ? "green-border" : ""}>Buy</span>
            <span
              onClick={() => setActive("rent")}
              className={active === "rent" ? "green-border" : ""} >
              Rent
            </span>
          </div>
          <Divider />

          <div className='bar'>
            <input type="text" className='search-ip'
              placeholder='Search by property type or location'
              value={searchParam}
              onChange={(e) => setSearchParam((e.target.value).toLowerCase())}
            ></input>
            <FaLocationCrosshairs color='var(--green)' size={25} />
            <MdKeyboardVoice color='var(--green)' size={25} />

            <Button className='search-btn' variant="contained"
              sx={{ backgroundColor: 'var(--green)' }}
              onClick={searchProperty}
              disabled={active.length === 0}
            >
              Search
            </Button>

          </div>

        </div>
      </div>

    </>
  )
}

export default SearchBar
