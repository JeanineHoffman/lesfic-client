import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  handleClickSearchPage
  render() {
    return (
      <div className="Landingpage">
        <section>
          Start by clicking the button below and use one of our drop down menus to pick a search option and click on the button below it to get your results. You may restart your search from the same page. Happy reading!
        </section>
        <section>
          <Link to='/search' className="goSearchBtn">Search</Link>
        </section>
        <section>
          <p class="landingPageP">Want to help us grow our library? Add new Authors/Books below.</p>
          <Link to='/newbook' className="newBookBtn">New Book</Link>
        </section>
      </div>
    );
  }
}

