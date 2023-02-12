import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fasthelpers.css';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigation  from './components/Navigation/Navigation';
import Home    from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer  from './components/Footer/Footer';

class App extends Component {
  componentDidMount() {
    let toTopButton = document.querySelector("button.top_btn"),
        pageHeader  = document.querySelector("#header");

    // Add class active to the link that matches the current scrolled section
    window.addEventListener("scroll", () => {
      let currentScrollPos = window.pageYOffset + 1,
          allSections  = document.querySelectorAll("section.home_section");
      for (let i = 0; i < allSections.length; i++) {
          let sectionID = allSections[i].getAttribute("id"),
              sectionHeight = allSections[i].offsetHeight,
              sectionTop = allSections[i].offsetTop;
              
          if((currentScrollPos > sectionTop) && (currentScrollPos <= (sectionTop + sectionHeight))) {
            document.querySelector(`body a[data-scroll = '#${sectionID}']`).classList.add("active");
          } else {
            document.querySelector(`body a[data-scroll = '#${sectionID}']`).classList.remove("active");
          }
      }
  
      // Control the visability of the to top button
      if (window.pageYOffset >= 800) {
        toTopButton.style.display = "block";
      } else {
        toTopButton.style.display = "none";
      }
    });

    // When clicking on the to top buuton
    toTopButton.addEventListener("click", () => {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: pageHeader.offsetTop
      });
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation/>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Footer/>
          <button className="btn btn-lg shadow border rounded-circle bold bg-danger white-color white-color-hvr cursor top_btn z-index" style={{position: "fixed", right: "15px", bottom: "15px", display: "none"}}>^</button>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
