import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { PropaneSharp } from '@mui/icons-material';

export default function PopCard(props) {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {props.info.name}
      </Typography>
      <Typography level="body2">{props.info.subText}</Typography>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src={props.info.img}
        //   srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      {/* <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ₹{props.info.budget} <Typography level="body3">for {props.info.budgetFor} nights</Typography>
          </Typography> 
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
          className={"bg-gradient-to-b from-emerald-500 to-green-500"}
          
        >
          <a href={"https://www.makemytrip.com/tripideas/"+props.info.redirect} target="_blank" style={{fontWeight: "bold"}}>Explore</a>
        </Button>
      </Box> */}
    </Card>
  );
}