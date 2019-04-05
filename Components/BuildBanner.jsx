import React from "react";
import Banner from './Banner.jsx';
import Button from './Button';
import Store from '../Store/index.js'

class BuildBanner extends React.Component {
    constructor() {
        super();
        this.state = Store.getState();
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