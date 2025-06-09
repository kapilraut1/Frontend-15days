import React from 'react'
import './index.css'
const Form = () => {
    const[form, setForm] = React.useState({
        name: '',   
        email: '',
        password: ''})

const[err, setErr] = React.useState({})

const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]:value})
}

const validateForm = () => {
    let errors = {};
    if (!form.name.trim()) {
        errors.name = "Name is required";
}
if(!form.email.includes('@')) {
    errors.email = "Email is invalid";}
if(form.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
}
return errors;

}

const handleSubmit=(e)=>{
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
        console.log("Form submitted successfully", form)
        alert("Name is "+ form.name + " Email is" + form.email + " Password is" + form.password);
        setErr({});
    } else {
        setErr(validationErrors);
        console.log("Form has errors",validationErrors);
    }
}
  return (
    <div className="container">
        <form action={handleSubmit} className="form">
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
            />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
  )
}

export default Form