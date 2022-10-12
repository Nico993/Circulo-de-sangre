import React from "react";

import "../../styles/home.css";

import Header from "./Header";
import Options from "./Options";

function Home(props){
    return <div className="row">
            <div className="col-lg-6 col-sm-12 p-0">
                <Header />
            </div>
            <div className="col-lg-6 col-sm-12 p-0">
                <Options handleClick = {props.handleClick}/>
            </div>
        </div>
}

export default Home;