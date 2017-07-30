import React from 'react';
import {shallow} from 'enzyme';
import Movies from './movies';

describe('Movies', () => {
  let wrapper;
  let instance;
  let p;
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => (
        new Promise((resolve, reject) => {
          resolve({
            status: 200,
            json: () => ([
              {
                "title": "How To Train Your Dragon",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "programType": "movie",
                "images": {
                  "Poster Art": {
                    "url": "https://streamcoimg-a.akamaihd.net/000/110/1196/1101196-PosterArt-c47d98ddca64ef18cf79c78d6ab8b3ad.jpg",
                    "width": 1000,
                    "height": 1500
                  }
                },
                "releaseYear": 2010
              },
              {
                "title": "Star Trek: Enterprise",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "programType": "series",
                "images": {
                  "Poster Art": {
                    "url": "https://streamcoimg-a.akamaihd.net/000/120/02/12002-PosterArt-90648d08f69e94d44d6cb4de2cdda757.jpg",
                    "width": 1000,
                    "height": 1500
                  }
                },
                "releaseYear": 0
              }
            ])
          })
        })
      )
    );
    wrapper = shallow(<Movies/>);
    instance = wrapper.instance();
  })
  ;

  describe('getMovies', () => {
    it('calls api and sets state property movies', () => {
      instance.setState = jest.fn();
      instance.getMovies();
      expect(instance.setState).toHaveBeenCalled;
    })
  })
})
