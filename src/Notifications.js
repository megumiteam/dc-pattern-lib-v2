// @flow
import React from 'react';
import { FaBell } from 'react-icons/fa';

const Notifications = () => (
  <div className="rounded-circle notifications__bell-bg text-center">
    <FaBell className="notifications__bell mx-auto my-auto align-middle" />
  </div>
);
export default Notifications;
