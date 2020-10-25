import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      phoneNumber: '',
      gender: '',
      destination: '',
      dietaryRestrictions: {
        isVegan: false
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const {name, value, type, checked} = evt.target;
    type === 'checkbox' ? 
    this.setState({
      dietaryRestrictions: {
        [name]: checked
      }
    })
    :
    this.setState({
      [name]: value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert('submit');
  }

  render() {
    return (
      <div>
        <h1>Travel form</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>First Name:</label>
            <br/>
            <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.handleChange}/>
            <br/>
            <br/>
            <label>Last Name:</label>
            <br/>
            <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleChange}/>
            <br/>
            <br/>
            <label>Age:</label>
            <br/>
            <input
            type="number"
            name="age"
            min="12"
            max="150"
            placeholder="12"
            value={this.state.age}
            onChange={this.handleChange}/>
          </fieldset>
          <fieldset>
            <label>Phone Number:</label>
            <br/>
            <input
            type="tel"
            name="phoneNumber"
            placeholder="+79876543210"
            value={this.state.phoneNumber}
            onChange={this.handleChange}/>
          </fieldset>
          <fieldset>
            <label>Male
              <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}/>
            </label>
            <label>Female
              <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}/>
            </label>
          </fieldset>
          <fieldset>
            <select 
            value={this.state.destination}
            onChange={this.handleChange}
            name="destination">
              <option value="germany">Germany</option>
              <option value="russia">Russia</option>
              <option value="spain">Spain</option>
            </select>
          </fieldset>
          <fieldset>
            <label>
              Vegan?
              <input 
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isVegan}></input>
            </label>
          </fieldset>
          <button>Submit</button>
        </form>
        <div>
          <h2>Entered information</h2>
          <p>First name: {this.state.firstName}</p>
          <p>Last name: {this.state.lastName}</p>
          <p>Phone number: {this.state.phoneNumber}</p>
          <p>Age: {this.state.age}</p>
          <p>Is vegan: {this.state.dietaryRestrictions.isVegan.toString()}</p>
          <p>Destination: {this.state.destination.charAt(0).toUpperCase() + this.state.destination.slice(1)}</p>
          <p>Gender: {this.state.gender}</p>
        </div>
      </div>
    )
  }
}


export default App;
