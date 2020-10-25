import React from 'react';

function FormComponent(props) {
    return (
        <main>
            <h1>Travel form</h1>
            <form onSubmit={props.handleSubmit}>
            <fieldset>
                <label>First Name:</label>
                <br/>
                <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={props.firstName}
                onChange={props.handleChange}/>
                <br/>
                <br/>
                <label>Last Name:</label>
                <br/>
                <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={props.lastName}
                onChange={props.handleChange}/>
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
                value={props.age}
                onChange={props.handleChange}/>
            </fieldset>
            <fieldset>
                <label>Phone Number:</label>
                <br/>
                <input
                type="tel"
                name="phoneNumber"
                placeholder="+79876543210"
                value={props.phoneNumber}
                onChange={props.handleChange}/>
            </fieldset>
            <fieldset>
                <label>Male
                <input
                type="radio"
                name="gender"
                value="male"
                checked={props.gender === "male"}
                onChange={props.handleChange}/>
                </label>
                <label>Female
                <input
                type="radio"
                name="gender"
                value="female"
                checked={props.gender === "female"}
                onChange={props.handleChange}/>
                </label>
            </fieldset>
            <fieldset>
                <select 
                value={props.destination}
                onChange={props.handleChange}
                name="destination">
                <option value="">Choose a destination</option>
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
                onChange={props.handleChange}
                checked={props.dietaryRestrictions.isVegan}></input>
                </label>
            </fieldset>
            <button>Submit</button>
            </form>
            <div>
            <h2>Entered information</h2>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Phone number: {props.phoneNumber}</p>
            <p>Age: {props.age}</p>
            <p>Is vegan: {props.dietaryRestrictions.isVegan.toString()}</p>
            <p>Destination: {props.destination.charAt(0).toUpperCase() + props.destination.slice(1)}</p>
            <p>Gender: {props.gender}</p>
            </div>
        </main>
    )
}

export default FormComponent;