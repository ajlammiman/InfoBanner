import React from "react";
import ReactDOM from "react-dom";
import Banner from './Banner.jsx';
import Button from './Button';
import Rota from '../Data/buildmaster.rota.js'

class BuildBanner extends React.Component {
    constructor() {
        super();
        this.state = Rota.buildmaster[0];
    }

    render() {     
        const currentmaster = this.state;
        
        return <div>
            <Banner title="This Weeks Build Master Is" name={currentmaster.name} image={currentmaster.image} />
            <div><Button class="previous" text="previous build master"/> <Button class="next" text="next build master"/></div>
        </div>;
    }
}

export default BuildBanner;