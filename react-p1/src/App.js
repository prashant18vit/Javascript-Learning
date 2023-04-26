import { Component } from 'react';
import UserInfo from './components/userInfo'
import SearchBar from './components/searchBar'
class App extends Component {
  
  constructor(){
    super()
    this.state = {
      userDetails: [],
      searchText: ""
    }
  }

  /**
   * 
   * LifeCycle Method
   * componentDidMount as soon as my component is loaded or mounted on top of Dom this method is called
   * 
   */

  componentDidMount(){
    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(users => this.setState(()=> {
      return {userDetails:users.data}
    }))
  }


  onUserSearch = (event)=>{
    const searchKey = event.target.value.toLocaleLowerCase()
    this.setState(()=>{ return {searchText:searchKey}})
  }

  render(){
    console.log("this.state.userDetails",this.state.userDetails)
    const filteredUserData = this.state.userDetails.filter((user)=>{
      return user.first_name.toLocaleLowerCase().includes(this.state.searchText)
    })
    return (
      <div className="App">
        <h1>Lets do some coding</h1>
        <UserInfo/>
        <SearchBar />
      </div>
    );
  }

}

export default App;
