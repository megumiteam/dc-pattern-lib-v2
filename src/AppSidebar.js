// @flow
import * as React from 'react';

type Props = { children: React.Node, inner: React.Node };
const AppSidebar = ({ children, inner }: Props) => (
  <div className="bg-white z-2 position-relative shadow app-left">
    <div className="global-nav">
      <div className="d-flex flex-row position-fixed vh-100 bg-primary global-nav__inner">
        <div className="d-flex align-items-center flex-column global-nav__secondary p-3">
          {inner}
        </div>
        <div className="d-flex flex-column flex-grow-1 global-nav__primary p-3">{children}</div>
      </div>
    </div>
  </div>
);
export default AppSidebar;
