import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export function DashBoard(props) {
    return (
        <Fragment>
            <NavLink to='/admin/addproduct'>Add Product</NavLink>
            <NavLink to='/admin/logout'>LogOut</NavLink>
        </Fragment>
    )
}