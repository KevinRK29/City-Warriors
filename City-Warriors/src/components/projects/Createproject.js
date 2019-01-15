import React,{ Component }from 'react';
import app from 'firebase/app';
import 'firebase/database'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.database();
    
  }

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}


class CreateProject extends Component {
  state ={
    title:' ',
    content: ' ',
    category: ' ',
    hashtag: ' ',
    severity: '1',
    location: ' ',
    filepath: ' ',

}

submitClick = (e) => {
  
}


handleChange = (e) => {
  debugger;
  this.setState({
    [e.target.id] : e.target.value,

  })
}
handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
}





render(){
  return (
    <div className="container">
      <form onSubmit={this.handleSubmit} className='white'>
        <h5 className="grey-text text-darken-3">Report the Issue</h5>

        <div class="input-field">
          <label htmlFor="title">Issue</label>
          <input type="text" id="title" onChange={this.handleChange}/>
        </div>
        <label>Category Select</label>
        <select className="browser-default" onChange={e => this.setState({category: e.target.value})}>
          <option value=''  disabled selected>Choose your option</option>
          <option value="1">Health and Mental Well Being</option>
          <option value="2">Law Enforcement</option>
          <option value="3">Drugs and Narcotics</option>
          <option value="4">Police Department</option>
          <option value="5">Road Transport</option>
        </select>
        <label>Risk Category</label>
        <select value=" " class="browser-default" onChange={e => this.setState({severity: e.target.value})} >
          <option  selected>Choose your option</option>
          <option  value="1">Low Risk</option>
          <option  value="2">Medium Risk</option>
          <option  value="3">High Risk</option>
        </select>
        <div className="input-field">
          <label htmlFor="hashtag">#Hashtag</label>
          <input type="text" id="hashtag" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="content">Detailed Description</label>
          <textarea name="" id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
        </div>
        <div className="input-field">
         <button type="submit" class="btn pink lighten-1 z-depth-0" onClick={this.submitClick}>
          Post Issue
        </button>
        </div>
       
      

      </form>
     
      

      
    </div>
  )
}
}
export default CreateProject
