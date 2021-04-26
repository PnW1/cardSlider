import React from 'react';
import PropTypes from 'prop-types';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
  width: '300px',
  height:'400px'
  },
  media: {
    height: 280,
  },
});
const CardItem = ({cardItem}) => {
    const classes = useStyles();

    const {index, picture, title, description} = cardItem;
    return (
        <Card id={`card-${index}`} className="card" >
        <CardActionArea>
            <CardMedia   
            className={classes.media}     
            image={picture}
            title="image"
            />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {/* {index+1} */}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          {title}                
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
     <center><Button color="primary">Read More</Button></center>   
      </CardActionArea>
        </Card>
    )
}

CardItem.propTypes = {
    cardItem: PropTypes.object.isRequired
}

export default CardItem;