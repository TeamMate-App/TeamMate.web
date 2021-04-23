import React from 'react'
import './UserProfile.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Movistar-Logo.png'


const UserProfile = () => {
    




    return (
        <div className="UserProfile"> 
            <Link to="/" className="">
                <span className="">Home </span>
            </Link>
            <div className="page-heading">
                <div className="media clearfix">
                    <div className="media-left pr30">
                        <a href="/">
                            <img className="media-object mw150" src={Logo} alt="..." width="100" height="100"/>
                        </a>
                    </div>
                    <div className="media-body va-m">
                        <h2 className="media-heading">User
   <small> - Profile</small>
                        </h2>
                        <p className="lead">Lorem ipsum dolor sit amet ctetur adicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="media-links">
                            <ul className="list-inline list-unstyled">
                                <li>
                                    <a href="/" title="facebook link">
                                        <span className="fa fa-facebook-square fs35 text-primary"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" title="twitter link">
                                        <span className="fa fa-twitter-square fs35 text-info"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" title="google plus link">
                                        <span className="fa fa-google-plus-square fs35 text-danger"></span>
                                    </a>
                                </li>
                                <li className="hidden">
                                    <a href="/" title="behance link">
                                        <span className="fa fa-behance-square fs35 text-primary"></span>
                                    </a>
                                </li>
                                <li className="hidden">
                                    <a href="/" title="pinterest link">
                                        <span className="fa fa-pinterest-square fs35 text-danger-light"></span>
                                    </a>
                                </li>
                                <li className="hidden">
                                    <a href="/" title="linkedin link">
                                        <span className="fa fa-linkedin-square fs35 text-info"></span>
                                    </a>
                                </li>
                                <li className="hidden">
                                    <a href="/" title="github link">
                                        <span className="fa fa-github-square fs35 text-dark"></span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="/" title="phone link">
                                        <span className="fa fa-phone-square fs35 text-system"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" title="email link">
                                        <span className="fa fa-envelope-square fs35 text-muted"></span>
                                    </a>
                                </li>
                                <li className="hidden">
                                    <a href="/" title="external link">
                                        <span className="fa fa-external-link-square fs35 text-muted"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="panel">
                        <div className="panel-heading">
                            <span className="panel-icon">
                                <i className="fa fa-star"></i>
                            </span>
                            <span className="panel-title">My Profile</span>
                        </div>
                        <div className="panel-body pn">
                            <table className="table mbn tc-icon-1 tc-med-2 tc-bold-last">
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="fa fa-desktop text-warning"></span>
                                        </td>
                                        <td>Sports Tab</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fa fa-microphone text-primary"></span>
                                        </td>
                                        <td>Coin purse</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fa fa-newspaper-o text-info"></span>
                                        </td>
                                        <td>Achievements</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fa fa-microphone text-primary"></span>
                                        </td>
                                        <td>Search players</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="tab-block">
                        <div className="nav nav-tabs">
                            <li className="active">
                                <a href="#tab1" data-toggle="tab">Information</a>
                            </li>
                            <li>
                                <a href="#tab1" data-toggle="tab">Historical</a>
                            </li>
                            <li>
                                <a href="#tab1" data-toggle="tab">Statistics</a>
                            </li>
                            <li>
                                <a href="#tab1" data-toggle="tab">Friends</a>
                            </li>
                            <li>
                                <a href="#tab1" data-toggle="tab">Medals</a>
                            </li>
                            <li>
                                <a href="#tab1" data-toggle="tab">Bookings</a>
                            </li>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="w-80 btn btn-lg btn-outline-danger" type="submit">Delete</button>
                </div>
            </div >
        </div>
    )


}

export default UserProfile