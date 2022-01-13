import { Space, Typography } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer' >
            <Typography.Title level={5} style={{color: "white", textAlign: "center"}}>
                Cryptoverse <br />
                All Right Reserved
            </Typography.Title>
            <Space>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/exchanges"> Exchanges </NavLink>
                <NavLink to="/news"> News </NavLink>
            </Space>
        </div>
    )
}

export default Footer
