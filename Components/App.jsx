import React from 'react';
import {connect} from 'react-redux';
import {ChangeContent} from '../Actions/index.js';
import Banner from './Banner.jsx';
import Button from './Button';
import {DataLoad} from '../Actions/index.js';

const mapDispatchToProps = (dispatch) => {
    return {
        ChangeContent: content => dispatch(ChangeContent(content)),
        DataLoad: () => dispatch(DataLoad())
    };
}

const mapStateToProps = (state) => {
    return {
        content: state.content
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
        this.getData = this.getData.bind(this);
    }
    
    getData() {
        return this.props.DataLoad().payload;
    }
   
    moveNext(event) {
        event.preventDefaultBehaviour;
        let nextPage = this.nextPage();
        this.setState({page: nextPage});
        this.props.ChangeContent(this.getData()[nextPage])
    }
    
    nextPage() {
        let max = (this.getData().length - 1);
        let currentPage = this.state.page;
        return (currentPage < max) ? ++currentPage : 0;
    }

    movePrevious(event) {
        event.preventDefaultBehaviour;
        let previousPage = this.previousPage();
        this.setState({page: previousPage});
        this.props.ChangeContent(this.getData()[previousPage])
    }

    previousPage() {
        let currentPage = this.state.page;
        let previousPage = (currentPage <= 0) ? 1 : --currentPage;
        return previousPage;
    }

    render() {     
        return <div>
            <Banner />
            <div><Button class="previous" text="previous" click={this.movePrevious}/> <Button class="next" text="next" click={this.moveNext}/></div>
        </div>;
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(BannerWrapper)

export default App;