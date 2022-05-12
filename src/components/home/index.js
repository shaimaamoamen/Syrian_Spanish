import React from "react";
import {HomeSection,HomeInformation,HomeTitle,Span} from './style.js'
const Home=()=>{
    return(
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>
                         Syrian Spanish 
                    </HomeTitle> 
                     <Span>
                         Company
                     </Span>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}
export default Home;