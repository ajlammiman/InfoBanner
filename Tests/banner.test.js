import React from "react";
import { shallow } from "enzyme";
import Banner from "../Components/Banner.jsx";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Test Banner Render', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            name: 'My Name',
            image: 'image'
        };

        wrapper = shallow(<Banner title={props.title} name={props.name} />);
    });

    it('renders component', () => {
        expect(wrapper).toBeDefined();
    });

    it('renders name', () => {
        var name = wrapper.find('.name'); 
       
        expect(name).toHaveLength(1);
        expect(name.text()).toBe(props.name);
    });

});


