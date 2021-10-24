import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Icon,NavItem} from 'react-materialize'

export const Navigation = () => {
  return (
    <div className="section">
      <Navbar
        alignLinks="right"
        brand={
          <a className="brand-logo" href="#">
            Logo<Icon>cloud</Icon>
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem>
          <Icon>favorite</Icon>
        </NavItem>
        <NavItem>
          <Icon>favorite_border</Icon>
        </NavItem>
        <NavItem>
          <Icon>whatshot</Icon>
        </NavItem>
      </Navbar>
    </div>
  );
};
