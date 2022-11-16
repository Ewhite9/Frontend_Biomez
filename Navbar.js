import {Component} from "react";
import "./NavbarStyles.css";
import { FaHome } from 'react-icons/fa';
import { ImEarth } from "react-icons/im";
import { CgProfile } from 'react-icons/cg';
import {GiMagnifyingGlass} from 'react-icons/gi';
class Navbar extends Component {
    render(){
        return(
            <nav className = "NavbarItems" > 
                <h1 className = "title1"> BIOME-Z <br></br> DATABASE </h1>  
                
            <ul className = "nav-menu" >
            
                <a href = "index.html"> 
                    <FaHome/> Home    
                </a> 
                <a href = "index.html"> 
                    <ImEarth /> Explore    
                </a>        
                <a href = "index.html"> 
                    <CgProfile/> About US    
                </a> 
                
            </ul>
               <div className="Icon"> <GiMagnifyingGlass/> </div>
                <div className = "search" >
                <input type ="text"  placeholder = "Search ....." />
                </div>
                
            </nav>
        );
    }
}

export default Navbar;