import React from 'react'
import "./Footer.css"

const Footer = () => {


    return (

        <div className="container-fluid">

            <footer className=" bg-footer text-center text-lg-start border border-white mt-xl-5 pt-4" style={{ backgroundColor: "black", color: "white" }}>

                <div className="container">

                    <div className="row">

                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-uppercase mb-4">Use Teammate</h5>

                            <ul className="list-unstyled mb-4">
                                <li>
                                    <a href="#!" className="text-white">How Teammate works</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">As an organizer</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">As a player</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Basic rules of use</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">FAQ: Frequently Asked Questions</a>
                                </li>
                            </ul>
                        </div>



                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-uppercase mb-4">About Teammate</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-white">About us?</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Press pack</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Terms and Conditions</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Sale and cancellation policy</a>
                                </li>
                            </ul>
                        </div>



                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-uppercase mb-4">Partners</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://mountainmadnesss.herokuapp.com/" className="text-white">MountainMadness</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Add Projects</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Add Projects</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Add Projects</a>
                                </li>
                            </ul>
                        </div>



                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-uppercase mb-4">Sign up to our newsletter</h5>

                            <div className="htmlForm-outline htmlForm-white mb-4">
                                <input type="email" id="htmlForm5Example2" className="htmlForm-control" />
                                <label className="htmlForm-label" htmlFor="htmlForm5Example2">Email address</label>
                            </div>

                            <button type="submit" className="btn btn-light btn-block">Subscribe</button>
                        </div>

                    </div>

                </div>



                <div className="text-center p-3 border-top border-white">
                    © 2021 Copyright:
      <a className="text-white" href="">Teammate</a>
                </div>

            </footer>

        </div>


    )
}

export default Footer