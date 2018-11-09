import React from "react";
import ReactDOM from "react-dom";
import Banner from './Banner.jsx'

class BuildBanner extends React.Component {
    constructor() {
        super();
        this.state = {"buildmaster" : [
            {
            "name" : "Adam Lammiman",
            "image" : "beaker.jpg"
            },
            {
                "name" : "John Bartram",
                "image" : "kermit.jpg"
            }
        ]}
        
    }

    render() {     
        const currentmaster = this.state.buildmaster[1];
        
        return <div>
            <Banner title="Last Weeks Build Master Is" name={currentmaster.name} image={"http://127.0.0.1:8887/" + currentmaster.image} />
        </div>;
    }
}

export default BuildBanner;