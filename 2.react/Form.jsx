import  { React,useState } from 'react';


const SimpleForm = ()=>
{
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: ''
      });
   
      const handleSubmit = (event) => {
        event.preventDefault();
        if (formState.firstName === '' || formState.lastName === '' || formState.email === '' || formState.phoneNo === '')
        {
          alert('All fields are required!');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)){
          alert('Invalid email address!');
        } else if (!/^\d{10}$/.test(formState.phoneNo)) {
          alert('Phone number should be 10 digits!');
        } else {
          console.log(formState);
        }
      };
   
      const handleChange = (event) => {
        setFormState({
          ...formState,
          [event.target.name]: event.target.value
        });
      };
   
      return (
       
          <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" value={formState.firstName} onChange={handleChange} />
          </label>t
          <br />
          <label>
            Last Name:
            <input type="text" name="lastName" value={formState.lastName} onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formState.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            Phone No:
            <input type="tel" name="phoneNo" value={formState.phoneNo} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
     
   
      );




}


export default SimpleForm;
