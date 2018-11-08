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
            title: 'My Title',
            name: 'My Name'
        };

        wrapper = shallow(<Banner title={props.title} name={props.name} />);
    });

    it('renders component', () => {
        expect(wrapper).toBeDefined();
    });

    it('renders title', () => {
        var title = wrapper.find('.title'); 
       
        expect(title).toHaveLength(1);
        expect(title.text()).toBe(props.title);
    });

    it('renders name', () => {
        var title = wrapper.find('.name'); 
       
        expect(title).toHaveLength(1);
        expect(title.text()).toBe(props.name);
    });

});
