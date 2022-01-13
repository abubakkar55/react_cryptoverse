import React from 'react';
import { Navbar, Home, News, Exchanges, Cryptocurrencies, CryptoDetails, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";
const App = () => {
    return (
        <Router>
            <div className="app">
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="main">
                    <Layout>
                        <div className="routes">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/exchanges" element={<Exchanges />} />
                                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                                <Route path="/news" element={<News />} />
                            </Routes>
                        </div>
                    </Layout>
                <Footer />
                </div>
            </div>
        </Router>
    )
}

export default App;