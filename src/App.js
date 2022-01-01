import './App.css';
import React from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import  {Card , Button} from 'react-bootstrap'
class App extends React.Component{ 
 
  state ={ fullName :"wassim refai",bio :"go home", profession : " developper" , imgSrc : './akram.jpeg' , Alt:"done" ,show : false , time: 0}
  handleClick=()=>this.setState({show :!this.state.show});
  increment=()=>this.setState({time: this.state.time +1});
  componentDidMount() {
    setInterval( this.increment, 1000);
  } 
  render(){
    return(
      <div style={{ marginLeft: '30%' }}>
      <Card style={{ width: '25rem' }}>
        <Button variant="primary" type="button" onClick={this.handleClick}> Click Here Bro</Button>
        {this.state.show=== true?
        <div><img src={this.state.imgSrc}  style={{ width: '25rem' }} alt={this.state.Alt}/></div>:<div></div>}
  <Card.Body>
  
    <Card.Text>
        {this.state.show === true?
        <div>
            <h1>Full Name : {this.state.fullName}</h1>
            <h1>Biography : {this.state.bio}</h1>
            <h1>Profession: {this.state.profession}</h1>
           
            <h1>{this.state.time}</h1>      
        </div>:
        <div></div>}

    </Card.Text>
   
  </Card.Body>
</Card>
          </div>
      );
  }
};

export default App;