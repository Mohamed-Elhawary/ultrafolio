import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {ListItem, Item} from './PortfolioStyle';

const Portfolio = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('data.json').then(respone => {setItems(respone.data.portfolio)})
    }, []);

    const portfolioItems = items.map((item) => {
        return (
            <Col md="6" lg="3" key={item.id}>
                <Item  className={`mb-4 ${item.category} relative`}>
                    <div className="overlay radius cursor d-none">
                        <div className="middle-content">
                            <h4 className="white-color mb-3">{item.title}</h4>
                            <button className="btn btn-lg bg-danger white-color white-color-hvr">Show More</button>
                        </div>
                    </div>
                    <img src={item.image} alt="item" className="img-fluid radius shadow cursor transition"/>
                </Item>
            </Col>
        ) 
    });

    const  filterItems = (e) => {
        let mobileItems = document.querySelectorAll(".mobile");
        let webItems    = document.querySelectorAll(".web");
        let listItems   = document.querySelectorAll(".controls ul li");
        listItems.forEach(list => list.classList.remove("active"));
        e.target.classList.add("active");
        if(e.target.dataset.filter == "web") {
            webItems.forEach(item => item.style.display = "block")
            mobileItems.forEach(item => item.style.display = "none")
        } else if(e.target.dataset.filter == "mobile") {
            mobileItems.forEach(item => item.style.display = "block")
            webItems.forEach(item => item.style.display = "none")
        } else {
            mobileItems.forEach(item => item.style.display = "block")
            webItems.forEach(item => item.style.display = "block")
        }
    }
   
    return (
        <section id="portfolio" className="section-padd home_section">
            <h2 className="mb-5">Portfolio</h2>
            <Container>
                <div className="controls">
                    <ul className="list-unstyled mb-5">
                        <Row>
                            <Col><ListItem onClick={filterItems} data-filter="all" className="cursor bold p-2 radius shadow border active">All</ListItem></Col>
                            <Col><ListItem onClick={filterItems} data-filter="web" className="cursor bold p-2 radius shadow border">Web</ListItem></Col>
                            <Col><ListItem onClick={filterItems} data-filter="mobile" className="cursor bold p-2 radius shadow border">Mobile</ListItem></Col>
                        </Row>    
                    </ul>
                </div>
                <div className="items">
                    <Row>
                        {portfolioItems}
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Portfolio;