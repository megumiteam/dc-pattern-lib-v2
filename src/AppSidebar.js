import t from 'prop-types';
import React, { Component } from 'react';
import { AppDrawerToggle } from '.';

export default class AppSidebar extends Component {
  render() {
    const { children, inner, ...props } = this.props;
    return (
      <div className="bg-white z-2 position-relative shadow app-left">
        <div className="global-nav">
          <div className="d-flex flex-row position-fixed vh-100 bg-primary global-nav__inner">
            <div className="d-flex align-items-center flex-column global-nav__secondary">
              {inner}
            </div>
            <div className="d-flex flex-column flex-grow-1 global-nav__primary">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
