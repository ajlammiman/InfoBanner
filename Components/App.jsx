import React from 'react';
import {connect} from 'react-redux';
import {NextContent} from '../Actions/index.js';
import Banner from './Banner.jsx';
import Button from './Button';

function mapDispatchToProps(dispatch) {
    return {
        NextContent: content => dispatch(NextContent(content))
    };
}



class App extends React.Component {
    render() {     
        return <div>
            <Banner />
            <div><Button class="previous" text="previous"/> <Button class="next" text="next"/></div>
        </div>;
    }
}

export default App;