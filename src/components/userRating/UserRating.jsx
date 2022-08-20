import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import RatingIcon from '@mui/material/Rating'

const UserRating = (props) => {
  return (
    <Card>
      <CardContent>
        <RatingIcon value={ parseInt(props.rating.rate)/2} readOnly /> 
        <Typography gutterBottom variant="h5" component="div">
         {props.rating.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.rating.content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default UserRating