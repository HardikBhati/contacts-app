import React from "react";

class AddContact extends React.Component {

    state={
    name:"",
    email:""
    };
     add=(e)=>{
         e.preventDefault();
         this.props.addContactHandler(this.state);
        this.setState({name:"" ,email:""});       
           
    }
 render(){
     return(
     <div className="ui main">
         <h2>add contact</h2>
         <form className="ui form" onSubmit={this.add}>
             <div className="field">
                 <label>Name</label>
                 <input type="text" name="name" placeholder="name" value={this.state.name}
                  onChange={(e)=>{this.setState({name:e.target.value})}}/>
             </div>
             <div className="field">
                 <label>email</label>
                 <input type="text" name="email" placeholder="email" value={this.state.email}  
                 onChange={(e)=>{this.setState({email:e.target.value})}}/>
             </div>
             <div>
               <button type="submit" className="ui button blue">Add</button>
             </div>
         </form>
     </div>
    
     );
 }
}
export default AddContact;