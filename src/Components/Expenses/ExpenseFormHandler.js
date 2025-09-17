import React, {useState} from 'react'
// import classes from './ExpenseformHandler.css'

function ExpenseFormHandler() {
    const [formData,setFormData]= useState(
        {
            name:'',
            email:'',
            message:''
        }
    )
    const [errors, setErrors]= useState({});

    const handleChange =(e)=>{
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(setFormData)
}

const handleSubmit=(e)=>{
    console.log(e)
    e.preventDefault();
    if(validate())
    {
        console.log('form Submitted',formData);
        alert('form Submittes successfully');
        setFormData({name: '', email:'', message:''})
        setErrors({});
    }
}


    //validation logic
const validate = ()=>{
    let newErrors={}
    if(!formData.name.trim())
    {
    newErrors.name= 'A Name is Required!!'
    }
    else if (formData.name.length<3)
    {
        newErrors.name= 'At Least 3 character required';
    }
    if(!formData.email.trim()) {
        newErrors.email='Please enter a valid mail' }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
        newErrors.email='Invalid Email Format' }
    if(!formData.message.trim()){
        newErrors.message='Message cna not be Empty!!'}
    else if(formData.message.length<10){
        newErrors.message='Message should be at leadt 10 character long'}
    setErrors(newErrors);
    return Object.keys(newErrors).length===0;
}

  return (
    <form
        onSubmit={handleSubmit}
        className= 'submission'
        >
    <div>Name Here
        <input type='text' name= 'name' 
        value={formData.name} 
        onChange={handleChange} 
        className='nameInput' 
        placeholder='name' 
        /> 
        {errors.name && <p classNam3e='errorNaming'>{errors.name}</p>}
     </div>
     <div>Email Here
        <input type='email' name='email'
        value={formData.email}
        onChange ={handleChange}
        placeholder='email'
        className='emailInput'
        />
    {errors.email && <p className='errorEmail'>{errors.email}</p>}
     </div>

     <div>Message here
        <input 
        type='text'
        name='message'
        value={formData.message}
        onChange={handleChange}
        className='messageInput'
        placeholder='Your Message Here'
        />
        {errors.message && <p className='errorMessage'>{errors.message}</p>}
     </div>
     <div>Submit
        <button type='submit' className='submitBtn'>SUBMIT</button>    
     </div>

    </form>
  )
}

export default ExpenseFormHandler