import { Link } from "react-router-dom"
import React from 'react';

function Error() {
    return (
        <div className="errorpage">
            <div className="hero">
            <section className="hero-content">
              <h2 className="sr-only">Error page</h2>
              <p className="subtitle">404</p>
              <p className="subtitle">Whoops! The page you requested does not exist.</p>
              <p className="text"><Link to="/">Return to the home page</Link></p>
            </section>
          </div>
        </div>
    )
}

export default Error