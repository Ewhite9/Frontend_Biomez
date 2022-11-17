import { Component} from "react";
import "./NavbarStyles.css";
import { FaHome } from 'react-icons/fa';
import { ImEarth } from "react-icons/im";
import { CgProfile } from 'react-icons/cg';
import {GiMagnifyingGlass} from 'react-icons/gi';
import { Link } from "react-router-dom"
class Navbar extends Component {
    render(){

        return(
            <nav className = "NavbarItems" > 
                <h1 className = "title1"> BIOME-Z <br></br> DATABASE </h1>  
                
            <ul className = "nav-menu" >
                
                <Link to = "Home"> 
                    <FaHome/> Home    
                </Link> 
                <Link to = "Explore"> 
                    <ImEarth /> Explore    
                </Link>        
                <Link to = "About"> 
                    <CgProfile/> About US    
                </Link> 

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