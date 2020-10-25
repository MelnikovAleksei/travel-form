import React from 'react';
import FormComponent from './FormComponent'
class FormContainer extends React.Component {
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
      <FormComponent 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.state}
      />
    )
  }
}


export default FormContainer;

