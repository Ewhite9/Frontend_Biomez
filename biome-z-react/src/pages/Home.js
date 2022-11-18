import "./Home.css";
import React from "react";
function HomePage() {
    return <div className = "Home-page">

        <div classname = "container ">
            <h1 className = "Title">Welcome to the Biome- Z Database!</h1>
                <p> Biome-Z (Biopsychosocial Index of Microbiome Ecologies) is an interactive research tool that categorizes information using the BPSE Framework.
                    Explore the database <a className = "link" href = "/Explore"> here </a> or use the search for a specific category or article. The BPSE Framework will sorts specific research date into meaningful BioPsychoSocial subtopics (Biological, Psychological and Social Evironments).
                    Accessing this website, the user will be able to search for highly specific articles that will be organized into manageable subtopics relating to the framework.<br></br> <h1 className="Web-attributes"> Websites Attributes: </h1> <p className = "attributes"> Characterizes and classify different scientific articles. Place articles into groups based on the BioPsychoSocial model so user can locate article more effciently. The website will be able to C.R.U.D (Create,Read,Upload,Delete). Moderators will be able to upload and Read in scientific article into the web database and categorizes into the BPSE Framework using machine learning, searching for scientific article and Moderators will also be able to deleting article from the database. </p>
                </p>
                <div className="polaroid">
                    <img src = "/images/Biome-z-pic.jpg" alt ="" /> 
                        <p>B.P.S.E Model Framework</p> 
                </div>
        </div>
    </div>
    
}

export default HomePage