import React  from "react";
import { NavbarSection,Logo,UlList,ListItem,Page,SamePage,Image } from "./style.js";
const Navbar=()=>{
    return(
       <NavbarSection>
           <div className="container">
               <Logo>
                   <img src="images/soap.png"  width="150px" height="50px"/>
               </Logo>
               <UlList>
                   <ListItem>
                   <Page to="/">Home</Page>
                   </ListItem>
                   <ListItem>
                       <SamePage to="/about">About</SamePage>
                   </ListItem>
                   <ListItem>
                       <SamePage to="/types">Types</SamePage>
                   </ListItem>
                   <ListItem>
                       <SamePage to="/price">Price</SamePage>
                   </ListItem>
                   <ListItem>
                       <Page to="/contact">Contact</Page>
                   </ListItem>
                   <ListItem>
                       <SamePage to="/call">
                           <Image src="images/call1.png" width="30px" height="30px"/>
                       </SamePage>
                   </ListItem>
                   
               </UlList>

           </div>
       </NavbarSection>
    )
}
export default Navbar;