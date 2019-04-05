import React from 'react';
import {connect} from 'react-redux';
import {NextContent} from '../Actions/index.js';
import Banner from './Banner.jsx';
import Button from './Button';
import Rota from '../Data/buildmaster.rota.js'

function mapDispatchToProps(dispatch) {
    return {
        NextContent: content => dispatch(NextContent(content))
    };
}

class BannerWrapper extends React.Component {
    constructor() {
        super();

        this.state = {
            page: 1
        };

        this.moveNext = this.moveNext.bind(this);
        this.movePrevious = this.movePrevious.bind(this);
    }
    
    moveNext(event) {
        event.preventDefaultBehaviour;
        let nextPage = this.state.page++;
        this.setState({page: nextPage});
        this.props.NextContent(Rota.content[nextPage])
    }
    
    movePrevious(event) {
        event.preventDefaultBehaviour;
        let previousPage = (this.state.page!=0) ? this.state.page-- : this.state.page;
        this.setState({page: previousPage});
        this.props.NextContent(Rota.content[previousPage])
    }

    render() {     
        return <div>
            <Banner />
            <div><Button class="previous" text="previous" click={this.movePrevious}/> <Button class="next" text="next" click={this.moveNext}/></div>
        </div>;
    }
}

const App = connect(null, mapDispatchToProps)(BannerWrapper)

export default App;