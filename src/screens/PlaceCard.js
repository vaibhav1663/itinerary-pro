import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.info.img}
        title={props.info.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.info.name} : {props.info.subText} | {props.info.dist} | {props.info.budget} | {props.info.budgetFor} | {props.info.travelDur[0]}
        </Typography>
        <Typography variant="body2">
          {props.info.desc}
        </Typography>
        {props.info.travelDur[0]!=="" && <Typography variant="h8">
          Travel Duration: more than {props.info.travelDur[0]} hours
          Budget: {props.info.budget} for {props.info.budgetFor} nights
        </Typography>}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small"><a href={"https://www.makemytrip.com/tripideas/"+props.info.redirect} target="_blank">Learn More</a></Button>
      </CardActions>
    </Card>
  );
}