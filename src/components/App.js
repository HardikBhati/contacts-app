import React,{useState} from 'react';
import './App.css';
import Header from './header';
import AddContact from './addContact';
import ContactList from './contactList';

function App() {
 
 const [contacts,setContacts]=useState([]);
 const addContactHandler=(contact)=>{
  // var temp=contacts;
  // temp.push(contact);
  // setContacts([contacts,temp]);
 setContacts([...contacts,contact]);

 }
  return(
     <div> 
    <Header/>
     <AddContact addContactHandler={addContactHandler}/>
     <ContactList contacts={contacts}/>
   </div>
    );
  
 
};

export default App;
