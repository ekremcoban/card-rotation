import React from 'react';
import './cards.scss';

const cards = () => {
    return (
        <div className="row">
            <div className="col-1-of-2">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--1">
                            &nbsp;
                            </div>
                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--1">
                                The Sea Explorer
                                </span>
                        </h4>
                        <div className="card__details">
                            <ul>
                                <li>First</li>
                                <li>Second</li>
                                <li>Third</li>
                                <li>Fourth</li>
                                <li>Fifth</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back--1">
                        <div className="card__cta">
                            <div className="card__price--box">
                                <p className="card__price--only">Only</p>
                                <p className="card__price--value">437 tl</p>
                            </div>
                            <a href="#" className="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1-of-2">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--2">
                            &nbsp;
                            </div>
                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--2">
                                The Sea Explorer
                                </span>
                        </h4>
                        <div className="card__details">
                            <ul>
                                <li>First</li>
                                <li>Second</li>
                                <li>Third</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back--2">
                        <div className="card__cta">
                            <div className="card__price--box">
                                <p className="card__price--only">Only</p>
                                <p className="card__price--value">754 tl</p>
                            </div>
                            <a href="#" className="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default cards;