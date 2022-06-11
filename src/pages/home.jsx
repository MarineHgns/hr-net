import { Link } from "react-router-dom"
import React from 'react';

function Home() {
    return (
        <main className="homepage">
          <div className="hero">
            <section className="hero-content">
              <p className="subtitle">Actions :</p>
              <Link to="/add-employee" className="box-button">
              <button className="button-87">Add employee</button>
              </Link>
              <Link to="/list-employee" className="box-button">
              <button className="button-87">Employee list</button>
              </Link>
            </section>
          </div>
        </main>
    )
}

export default Home
