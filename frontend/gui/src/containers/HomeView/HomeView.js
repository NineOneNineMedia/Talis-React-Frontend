import React from "react";
import { Jumbotron, Button, Image } from 'react-bootstrap'
import axios from "axios";
import cardImg1 from '../../assets/img/blackfam.jpg'
import cardImg2 from '../../assets/img/Kitchen.jpg'
import cardImg3 from '../../assets/img/familymovingin.jpg'

import ListingCards from '../../components/ListingCards/ListingCards';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class HomeView extends React.Component {
    state = {
        listings: [],
    };

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/pages/").then((res) => {
            this.setState({
                listings: res.data,
            })
            console.log(res.data)
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Jumbotron fluid className="p-0">
                    <div className="jumbotron-overlay">
                        <div className="container text-center jumbotron-content">
                            <h1 className="display-4 font-weight-bold">
                                Discover Your New Home
                        </h1>
                            <p className="h3 font-weight-normal">Helping renters find the perfect fit!</p>
                            <hr></hr>
                        </div>
                    </div>

                </Jumbotron>

                <section id="listings" className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-4 font-weight-light">Latest Listings</h2>

                        <ListingCards data={this.state.listings} />

                        <div className="row justify-content-center mt-3">
                            <a href="/listings">
                                <Button size="lg" variant="primary">
                                    View More
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>

                <section id="services" className="py-5">
                    <div className="container">
                        <div className="row justify-content-center text-center align-items-center services-info">
                            <div className="col-md-6 order-2 order-md-1">
                                <h3>Helping You Find the Perfect Fit</h3>
                                <p className="font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis
                    nam! </p>
                            </div>
                            <div className="col-md-6 p-0 order-1 order-md-2">
                                <div className="card rounded-0 border-0">
                                    <Image src={cardImg1} className="card-img rounded-0" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center text-center align-items-center services-info">
                            <div className="col-md-6 p-0">
                                <div className="card rounded-0 border-0">
                                    <Image src={cardImg2} className="card-img rounded-0" alt="..." />
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <h3>Luxury at the Right Price</h3>
                                <p className="font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis
                    nam! </p>
                            </div>
                        </div>
                        <div className="row justify-content-center text-center align-items-center services-info">
                            <div className="col-md-6 order-2 order-md-1">
                                <h3>Helping Investors Maximize Occupancy</h3>
                                <p className="font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis
                    nam! </p>
                            </div>
                            <div className="col-md-6 p-0 order-1 order-md-2">
                                <div className="card rounded-0 border-0">
                                    <Image src={cardImg3} className="card-img rounded-0" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5">
                    <div className="container mb-5">
                        <div className="row justify-content-center text-center ">
                            <div className="col-md-12">
                                <h4>Search hundreds of listings including apartments, houses, condos and townhomes available for rent in
                    Accra. You'll find your next home in any style you prefer.</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default HomeView;
