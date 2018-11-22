import React from "react";
import ReactDOM from "react-dom";
import Banner from './Banner.jsx';

class BuildBanner extends React.Component {
    constructor() {
        super();
        this.state = {
            "name" : "Adam Lammiman",
            "image" : "beaker.jpg"
            }
    }

    render() {     
        const currentmaster = this.state;
        
        return <div>
            <Banner title="This Weeks Build Master Is" name={currentmaster.name} image={"http://127.0.0.1:8887/" + currentmaster.image} />
        </div>;
    }
}

export default BuildBanner;