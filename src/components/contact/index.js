import React, { Fragment } from "react";
import Footer from './../footer'
import{ContactSection,Form,FormInput,InputText,InputEmail,InputExp,TextArea,Input,InputSubmit}from './style.js'
const Contact=()=>{
    return(
        <React.Fragment>
       <ContactSection>
           <div className="container">
                   <Form action="">
                   <FormInput>
                       <InputText type='text' placeholder="Your Name"/>
                       <InputEmail type='email' placeholder="Your Email"/>
                   </FormInput>
                   <InputExp type='text' className="sub" placeholder="Your Subject"/>
                   <TextArea cols='30' rows='10' placeholder="Your Message"></TextArea>
                   <InputSubmit type="submit" value="Send Message"/>
               </Form>
           </div>
       </ContactSection>
       <Footer/>
       </React.Fragment>
    )
}
export default Contact;