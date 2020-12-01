import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

export default function MediaCard({text ,value,color}) {
console.log(color)
  return (
    <Card className='myCard' style={{backgroundColor:color}}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          
          <CountUp start={0}  delay={1} end={value} />
           </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card>
  );
}
