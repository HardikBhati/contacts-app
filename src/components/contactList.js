import React from "react";
import ContactCard from "./contactCard";
const ContactList=({contacts})=>{
    // const contactlist=contacts.map((contact)=>{
    // return(
    //    <ContactCard contact={contact}/>
   
    // )});
    return(
        
        <div>
           <h2>contact list</h2>
            <div className="ui celled list">{contacts.map((contact)=>{
      return(
       <ContactCard contact={contact}/>
   
    )})}</div>
        </div>
    );
    
};
export default ContactList;