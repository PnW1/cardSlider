import React, { Component } from 'react';
// import './App.css';
import CardItem from './CardItem';
import data from './data/data'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cards: data.cards,
      cardItem: data.cards[0]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.cardItem.index+1;
    this.setState({
      cardItem: data.cards[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.cardItem.index-1;
    this.setState({
      cardItem: data.cards[newIndex]
    })
  }

  render() {
    const {cards, cardItem} = this.state;
    return (
      <div className="App">

        <Button 
          style={{float:'right',marginTop:'320px',zIndex:'5'}}
          onClick={() => this.nextProperty()} 
          disabled={cardItem.index === data.cards.length-1}
        ><ArrowForwardRoundedIcon />  </Button>
        <Button 
         style={{float:'left',marginTop:'320px',zIndex:'5'}}
          onClick={() => this.prevProperty()} 
          disabled={cardItem.index === 0}
        ><ArrowBackRoundedIcon /></Button>

        <div className="page">
            <section>
               
                <Typography variant="h3" component="h2"> What We Do </Typography>
                <Typography style={{marginTop:'10px'}} variant="body2" color="textSecondary" component="p"> We develop successful app for our clients who range from <br/>startups entrepreneur to Fortune 500. </Typography>
            </section>

            <div className="col">
              <div className={`cards-slider active-slide-${cardItem.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${cardItem.index*(100/cards.length)}%)`
                }}>
                  {
                    cards.map(cardItem => <CardItem key={cardItem._id} cardItem={cardItem} />)
                  }
                </div>
              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default App;
