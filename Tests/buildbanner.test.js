import React from "react";
import { shallow } from "enzyme";
import BuildBanner from "../Components/BuildBanner.jsx";
import Banner from '../Components/Banner.jsx';
import Button from '../Components/Button.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rota from '../Data/buildmaster.rota.js'

configure({ adapter: new Adapter() });

describe('Test Build Banner', () => {
    let state;
    let wrapper;
    let banner;
    let button;

    beforeEach(() => {
        state = Rota;
        
        wrapper = shallow(<BuildBanner />);
        banner = wrapper.find(Banner);
        button = wrapper.find(Button);
    });
    
    it('initial load of app loads first buildmaster', () => {
        expect(banner.prop('name')).toBe(state.buildmaster[0].name);
    });

    it('moving to next person in rota loads second buildmaster', () => {
        //expect(button.find('next')).toHaveLength(1);
    });
});