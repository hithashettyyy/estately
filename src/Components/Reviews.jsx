import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import data from '../data/db.json'
import '../Styles/Reviews.css'

function Reviews() {


  return (
    <>
      <div className='carousell-container'>

        <div className='reviews-container'>
          {data?.reviews?.map((person) => (

            <div className='review'>
              <Card>
                <CardMedia
                  component="img"
                  image={person.imageUrl}
                  alt={person.name}
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />

                <CardContent sx={{ backgroundColor: 'var(--green)' }}>
                  <Typography variant='h6' sx={{ color: 'white', fontWeight: 'bold' }}>
                    {person.name}
                  </Typography>
                  <Typography variant='h6' sx={{ fontSize: '15px', color: 'white' }}>
                    {person.comment}
                  </Typography>
                </CardContent>
              </Card>
            </div>

          ))}

        </div>

      </div>
    </>
  )
}

export default Reviews

