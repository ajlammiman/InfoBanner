import React from 'react';
import {connect} from 'react-redux';
import {ChangeContent} from '../Actions/index.js';
import Banner from './Banner.jsx';
import Button from './Button';
import Rota from '../Data/buildmaster.rota.js'

function mapDispatchToProps(dispatch) {
    return {
        ChangeContent: content => dispatch(ChangeContent(content))
    };
}

class BannerWrapper extends React.Component {
    constructor() {
        super();

        this.state = {
            page: 0
        };

        this.moveNext = this.moveNext.bind(this);
        this.movePrevious = this.movePrevious.bind(this);
    }
    
    moveNext(event) {
        event.preventDefaultBehaviour;
        let amountOfContent = Rota.content.length;
        let currentPage = this.state.page;
        
        let max = --amountOfContent;
        let nextPage = (currentPage < max) ? ++currentPage : currentPage;
        this.setState({page: nextPage});
        this.props.ChangeContent(Rota.content[nextPage])
    }
    
    movePrevious(event) {
        event.preventDefaultBehaviour;
        let currentPage = this.state.page;
        let previousPage = (currentPage < 0) ? 1 : --currentPage;
        this.setState({page: previousPage});
        this.props.ChangeContent(Rota.content[previousPage])
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