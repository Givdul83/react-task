import React from 'react'
import {useState} from 'react';
import'../FormSection/formsection.css';


const FormSection = () => {

  
  const nameRegex = /^[A-Za-z\s\-']{2,}$/;
  
  const [ErrorName, setErrorName] = useState("")
  const [name, setName] = useState('')
  let nameOK= false;

  const validateName = () => {
    if(name.length < 1) {
      setErrorName('You need to enter a name')
      return

    } else if(!nameRegex.test(name)) {
      setErrorName('You have to enter a valid name')
      return
    }
    else{

      setErrorName("")
      nameOK= true;
      return
    }

   
  }
  const emailValidator =  /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  const [emailError, setEmailError] = useState("")
  const [email, setEmail] = useState('')
  let emailOk= false;

  const validateEmail = () => {
    if(email.length < 1) {
      setEmailError('You need to enter a email-adress')
     
      return
    } else if(!emailValidator.test(email)) {
      setEmailError('You have to enter a valid email')
      return
    }

      else{
      setEmailError("")
      emailOk= true;
      return
        }
      }

   const [message, setMessage] = useState('')
   const [emptyMessage, setEmptyMessage]= useState('')
   let messageOk= false;

   const validateMessage = () => {
    if(message.length<1) {
      setEmptyMessage('You cannot submit an empty message');
      return
    }
    else{
      setEmptyMessage('');
      messageOk= true;
      return
    }
   }
   
   const [regSuccess, setRegSuccess]= useState('')

   async function validateForm() {
    validateName();
    validateEmail();
    validateMessage();
    if(nameOK && emailOk && messageOk) {
      var user ={
        name: name,
        email: email,
        message: message
      };
      console.log("redo för registrering")
      console.log(" 1.", user)
      
      const json= JSON.stringify(user);
      console.log("json", json)
      

      const res= await fetch ("https://win23-assignment.azurewebsites.net/api/contactform", {
          method:"post",
          headers: {
            "Content-type": "application/json"
          }, 
          body: json
      })
        console.log("Response from server", await res.text())
        
        let data

        if (res.status === 200){
        
         setRegSuccess('Your message has been registerd')
         console.log(res.status)
         
        } else {
          data= await res.text()
          console.log(data);
        }

    }
   }


const handleNameChange = (event) => {
  setName(event.target.value)
}
const handleEmailChange = (event) => {
  setEmail(event.target.value)
}
const handleMessageChange = (event) => {
  setMessage(event.target.value)}



  return (
    <section className="message">
    <div className="container one">
    <div className="container">
            <h2>Leave us a message<br/> for any information.</h2>
            <form className="name" noValidate>
                <input type="text" placeholder="Name*" name="name" value={name} onChange={handleNameChange} />
                <div><p className="error">{ErrorName}</p></div>
                </form>
                
                <form className="mail" noValidate>
                <input type="email" placeholder="Email*" name="email" value={email} onChange={handleEmailChange}/>
                <div><p className="error">{emailError}</p></div>
                </form>
                <form>
                <textarea className="your-mess" placeholder="Your message*" name="message" value={message} noValidate onChange={handleMessageChange}/>
                <div><p className="error">{emptyMessage}</p></div>
                </form>
            <button className="btn-yellow" onClick={validateForm} >Send message <i className="fa-solid fa-arrow-up-right"></i></button>
            <div><p className="registered">{regSuccess}</p></div>
        </div> 
        </div>
        </section>
  )
}

export default FormSection