import React,{Component} from "react";
import Home from './../home'
import About from './../about'
import Types from './../types'
import Price from './../price/price'
import Call from './../call'
import Footer from './../footer'
class Index extends Component{
    render(){
        return(
            <div>
                <Home/>
                <About/>
                <Types/>
                <Price/>
                <Call/>
                <Footer/>
            </div>
        )
    }
}
export default Index