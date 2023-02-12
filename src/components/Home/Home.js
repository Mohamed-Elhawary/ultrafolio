import React, {Component} from 'react';

import Header    from './../Header/Header';
import Work      from './../Work/Work';
import Portfolio from './../Portfolio/Portfolio';
import Profile   from './../Profile/Profile';
import About     from './../About/About';
import Social    from './../Social/Social';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Work/>
        <Portfolio/>
        <Profile/>
        <About/>
        <Social/>
      </div>
    );
  }
}

export default Home;
