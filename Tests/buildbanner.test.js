import React from "react";
import { shallow } from "enzyme";
import BuildBanner from "../Components/BuildBanner.jsx";
import Banner from '../Components/Banner.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Test Build Banner', () => {
    let state;
    let banner;

    beforeEach(() => {
        state = {
            "buildmaster": [
                {
                    "name": "Adam Lammiman",
                    "image": "beaker.jpg"
                },
                {
                    "name": "John Bartram",
                    "image": "kermit.jpg"
                }
            ]
        }
        
        let wrapper = shallow(<BuildBanner />);
        banner = wrapper.find(Banner);
    });
    
    it('initial load of app loads first buildmaster', () => {
        expect(banner.prop('name')).toBe(state.buildmaster[0].name);
    });
});