import React, { Component } from 'react';
import UserInfo from './Component/UserInfo';
import './index.css';

class App extends Component {
    state = {
        userInfo: [
          { fname: "Temitayo", lname: "Adisa", email: "tayoadisa1@gmail.com", pnum: "08035285100" },
          { fname: "Segun", lname: "Vibes", email: "segunvibes@gmail.com", pnum: "08032295102" },
          { fname: "Igbehiadun", lname: "Arisa", email: "igbehinadun1@gmail.com", pnum: "08045231009" },
          { fname: "oladimi", lname: "Abesan", email: "oladimuey@gmail.com", pnum: "07089277920" },
          { fname: "Fatai", lname: "Williams", email: "fateta@gmail.com", pnum: "081262426525" },
        ],
      };

  render() {
    return (
        <>
      <div className='container'>

       <UserInfo fullname={this.state.userInfo[0].fname} 
                 lastname={this.state.userInfo[0].lname}
                 email = {this.state.userInfo[0].email}
                 pnum = {this.state.userInfo[0].pnum}
                 className = "conbox"
                 
                 />
        </div>

        <div className='container'>

       <UserInfo fullname={this.state.userInfo[1].fname} 
                 lastname={this.state.userInfo[1].lname}
                 email = {this.state.userInfo[1].email}
                 pnum = {this.state.userInfo[1].pnum}
                 className = "conbox"
                 
                 />
        </div>

        <div className='container'>

       <UserInfo fullname={this.state.userInfo[2].fname} 
                 lastname={this.state.userInfo[2].lname}
                 email = {this.state.userInfo[2].email}
                 pnum = {this.state.userInfo[2].pnum}
                 className = "conbox"
                 
                 />
        </div>

        <div className='container'>

       <UserInfo fullname={this.state.userInfo[3].fname} 
                 lastname={this.state.userInfo[3].lname}
                 email = {this.state.userInfo[3].email}
                 pnum = {this.state.userInfo[3].pnum}
                 className = "conbox"
                 
                 />
        </div>

        <div className='container'>

       <UserInfo fullname={this.state.userInfo[4].fname} 
                 lastname={this.state.userInfo[4].lname}
                 email = {this.state.userInfo[4].email}
                 pnum = {this.state.userInfo[4].pnum}
                 className = "conbox"
                 
                 />
        </div>
        </>
    )
  }
}

export default App;