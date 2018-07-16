import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';



class App extends Component {
constructor(){
    super()
    this.state=
    {
      robots: [],
      searchfield:''
    }
  }
  

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }


  onSearchChange = (e) =>
  {
    this.setState({searchfield: e.target.value})
    
  }
  render(){
    const filter = this.state.robots.filter(robots =>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
  return (
    <div  className='tc'>
    <h1>Pussy Friends</h1>
    <SearchBox SearchChange={this.onSearchChange} />
    <Scroll>
    <ErrorBoundry>
      <CardList robots = {filter}/>
    </ErrorBoundry>
    </Scroll>
    
    </div>

    )
  }



}

export default App;
