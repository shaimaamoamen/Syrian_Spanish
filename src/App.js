import React,{Component} from "react";
import { BrowserRouter,Route,Routes,HashRouter } from "react-router-dom";
import Navbar from './components/navbar';
import Contact from './components/contact';
import Index from './components/index';
import About from './components/about';
import Types from './components/types';
import Price from './components/price/price';
import Call from './components/call';
class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className="App" >
           <Navbar/>
            <Routes>
                <Route exact path="/" element={<Index/>}/>
                <Route  path="/about" element={<About/>}/>
                <Route  path="/types" element={<Types/>}/>
                <Route  path="/price" element={<Price/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route  path="/call" element={<Call/>}/>
            </Routes>
            </div>
            </BrowserRouter>
            
        )
    }
}
export default App;