import React from "react";
import ReactDOM from "react-dom";
import Banner from './Banner.jsx'

class BuildBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"buildmaster": {} }
        
    }

    render() {     
        const currentmaster = this.props;
        
        return <div>
            <Banner title="Last Weeks Build Master Is" name={currentmaster.name} image={"http://127.0.0.1:8887/" + currentmaster.image} />
        </div>;
    }
}

export default BuildBanner;