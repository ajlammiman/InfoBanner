import React from 'react';
import {connect} from 'react-redux';
import {ChangeContent} from '../Actions/index.js';
import {GetData} from '../Actions/index.js';
import Banner from './Banner.jsx';
import Button from './Button';

const mapDispatchToProps = (dispatch) => {
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
    
    componentDidMount() {
        this.props.GetData();
    }

    moveNext(event) {
        event.preventDefaultBehaviour;
        let nextPage = this.nextPage();
        this.setState({page: nextPage});
        this.props.ChangeContent(Rota.content[nextPage])
    }
    
    nextPage() {
        let max = (Rota.content.length - 1);
        let currentPage = this.state.page;
        return (currentPage < max) ? ++currentPage : 0;
    }

    movePrevious(event) {
        event.preventDefaultBehaviour;
        let previousPage = this.previousPage();
        this.setState({page: previousPage});
        this.props.ChangeContent(Rota.content[previousPage])
    }

    previousPage() {
        let currentPage = this.state.page;
        let previousPage = (currentPage < 0) ? 1 : --currentPage;
        return previousPage;
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