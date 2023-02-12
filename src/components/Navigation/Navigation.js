import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import './NavigationStyle.css'

let body = document.querySelector("body");

// GetSiblings Function
const getSiblings = (elem) => {
	// Setup siblings array and get the first sibling
	let siblings = [];
    let sibling = elem.parentElement.firstElementChild;
    // Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
        }
        sibling = sibling.nextSibling
	}
    return siblings;
};

// ScrollTo Function 
const scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
}

// When clicking on the navbar links
body.addEventListener("click", (e) => {
    if(e.target.nodeName === "A" && window.location.pathname == "/") {
        let listSiblings = getSiblings(e.target);
        e.preventDefault();
        e.target.classList.add("active");
        listSiblings.forEach(sibling => {
            sibling.classList.remove("active");
        });
    
        // Scroll to the section that match the clicked link
        let activeSection = document.querySelector(`${e.target.dataset.scroll}`);
        scrollTo(activeSection);

    } else if (e.target.nodeName === "A" && window.location.pathname == "/contact") {
        let listSiblings = getSiblings(e.target);
        listSiblings.forEach(sibling => {
            sibling.classList.remove("active");
        });
    } 
});

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" style={{borderBottom: "1px solid #999"}}>
            <Navbar.Brand as={Link} to='/' className="bold text-danger">UltraFolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to='/' className="bold transition" exact data-scroll="#header">Home</Nav.Link>     
                    <Nav.Link className="bold transition" data-scroll="#work">Work</Nav.Link>
                    <Nav.Link className="bold transition" data-scroll="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link className="bold transition" data-scroll="#profile">Profile</Nav.Link>
                    <Nav.Link className="bold transition" data-scroll="#about">About</Nav.Link>
                    <Nav.Link className="bold transition" data-scroll="#social">Social</Nav.Link>
                    <Nav.Link as={NavLink} to='/contact' className="bold">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;