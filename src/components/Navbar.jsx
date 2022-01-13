import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import { Avatar, Menu, Typography } from "antd";
import React from 'react';
import { NavLink } from "react-router-dom";
import icon from "../images/cryptocurrency.png";
const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Avatar src={icon} size="large" alt='cryptoverse' />
                <Typography.Title level={2} className='logo' >
                    <NavLink to="/">Cryptoverse </NavLink>
                </Typography.Title>
            </div>
            <Menu theme='dark'>
                <Menu.Item 
                icon={<HomeOutlined />}>
                <NavLink to="/">Home </NavLink>
                </Menu.Item>
                <Menu.Item 
                icon={<FundOutlined />}>
                <NavLink to="/cryptocurrencies">Cryptocurrencies </NavLink>
                </Menu.Item>
                <Menu.Item 
                icon={<MoneyCollectOutlined />}>
                <NavLink to="/exchanges">Exchanges </NavLink>
                </Menu.Item>
                <Menu.Item 
                icon={<BulbOutlined />}>
                <NavLink to="/news">News </NavLink>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
