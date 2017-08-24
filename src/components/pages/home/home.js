import React from 'react';
import {Link} from 'react-router-dom'
import {HOME_CARDS} from './home.constants';
import './home.css';
import {CatagoryCard} from './catagory-cards/catagory-cards';

class Home extends React.Component {
  render() {
    return (
      <section className="home-section">
        {
          HOME_CARDS.map(homeCard => (
            <Link key={homeCard.id} to={homeCard.link} className="home-section-links">
              <CatagoryCard homeCard={homeCard} />
            </Link>
          ))
        }
      </section>
    )
  }
}

export default Home;
