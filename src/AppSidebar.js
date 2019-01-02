import t from 'prop-types'
import React, { Component } from 'react'
import { AppDrawerToggle } from './';

export default class AppSidebar extends Component {
  render() {
    let {children, inner, ...props} = this.props
    return <div className="bg-white z-2 position-relative shadow app-left">
      <div className="global-nav">
        <div className="d-flex flex-row position-fixed vh-100 bg-primary global-nav__inner">
          <div className="col d-flex flex-grow-0 justify-content-center pt-4 pb-4 mb-auto global-nav__secondary">
            {inner}
          </div>
          <div className="col d-flex flex-column flex-grow-1 pt-4 pb-4 global-nav__primary">
            {children}
          </div>
        </div>
      </div>
    </div>
  }
}