import React from  "react";
const ContactCard=({contact})=>{
    
 return (
    <div className="item">
    <div className="content">
        <div className="header">{contact.name}</div>
        <div>{contact.email}</div>

    </div>
    <div>
        <i className="trash alternate icon outline "/>
    </div>
    </div>
 )
}
export default ContactCard;