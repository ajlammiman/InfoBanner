import React from "react";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {content: {title: state.title, name: state.name, image: state.image} };
}; 

const Content = ({content}) => 
        <div>
            <h1 className="title">{content.title}</h1>
            <div>
                <img src={content.image} />
            </div>
            <div>
                <h2 className="name">{content.name}</h2>
            </div>
        </div>    

const Banner = connect(mapStateToProps)(Content);

export default Banner;