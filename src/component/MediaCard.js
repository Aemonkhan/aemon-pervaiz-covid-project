import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';


export default function MediaCard({text ,value,color}) {
console.log(color)
console.log(value)
  return (
  
    <Card className='myCard' style={{backgroundColor:color}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <CountUp start={10000} duration={1.5} end={value} style={{color:'white',fontwidth:'400'}} />
           </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card>
  );
}
