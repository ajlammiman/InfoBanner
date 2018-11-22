import React from "react";
import ReactDOM from "react-dom";
import Banner from './Banner.jsx';
import Rota from '../Data/buildmaster.rota.js'

class BuildBanner extends React.Component {
    constructor() {
        super();
        this.state = Rota.buildmaster[0];
    }

    render() {     
        const currentmaster = this.state;
        
        return <div>
            <Banner title="This Weeks Build Master Is" name={currentmaster.name} image={"http://127.0.0.1:8887/" + currentmaster.image} />
            <div><a href="" class="previous">previous build master</a> <a href="" class="next">next build master</a></div>
        </div>;
    }
}

export default BuildBanner;