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

        wrapper = shallow(<Banner title="Foo" name="Bar" />);
    });

    it('renders component', () => {
        expect(wrapper).toBeDefined();
    });

    /*it('renders content', () => {
        wrapper = shallow(<Banner title="Foo" name="Bar" />);

        expect(wrapper.getElementById('#title')).to.have.lengthOf(1);
    });*/

});
