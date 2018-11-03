import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import './style.css';

class HomePage extends Component {


render() {
    return (
        <container className="home-page">
            <header>
                <h1>Scheduler App</h1>
            </header>
            <main>
                <section className="scheduled-events">
                    <h3>My Scheduled Events</h3>
                    <ul>
                        <li>
                            Event 1
                        </li>
                        <li>
                            Event 2
                        </li>
                    </ul>
                </section>
                <section className="available-events">
                    <header>
                        <ul>
                            <li>Filter1</li>
                            <li>Filter2</li>
                            <li>Filter3</li>
                        </ul>
                    </header>
                    <body>
                        <section>
                            <h3>Monday, January 1st, 2018</h3>
                            <div>
                                <ul>
                                    <li>6AM</li>
                                    <li>8:30AM</li>
                                    <li>4:30PM</li>
                                    <li>7PM</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <h3>Tuesday, January 2nd, 2018</h3>
                            <div>
                                <ul>
                                    <li>6AM</li>
                                    <li>8:30AM</li>
                                    <li>4:30PM</li>
                                    <li>7PM</li>
                                </ul>
                            </div>
                        </section>
                    </body>
                </section>
            </main>
        </container>
    )
}
}

export default HomePage