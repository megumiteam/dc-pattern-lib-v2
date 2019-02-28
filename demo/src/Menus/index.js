import _ from 'lodash';


export function demoPrimaryNav() {
  const labels = {
    navLabels: {
      name: 'Demo Nav 1'
    },
  };

  const menu = {
    navItems: [
      {
        name: 'Menu Item 1',
        to: '/admin/menu-item-1',
      },
      {
        name: 'Menu Item 2',
        to: '/admin/menu-item-2',
      },
      {
        name: 'Menu Item 3',
        to: '/admin/menu-item-3',
      },
      {
        name: 'Menu Item 4',
        to: '/admin/menu-item-4',
      },
      {
        name: 'Disabled Menu',
        to: '/admin/menu-item-5',
        disabled: true,
      },
    ],
  };

  const items = _.merge(labels, menu);
  return items;
}

export function demoSecondaryNav() {
  const labels = {
    navLabels: {
      name: 'Demo Nav 2'
    },
  };

  const menu = {
    navItems: [
      {
        name: 'Menu Item 1',
        to: '/admin/menu-item-1',
      },
      {
        name: 'Menu Item 2',
        to: '/admin/menu-item-2',
      },
      {
        name: 'Menu Item 3',
        to: '/admin/menu-item-3',
      },
      {
        name: 'Menu Item 4',
        to: '/admin/menu-item-4',
      },
    ],
  };

  const items = _.merge(labels, menu);
  return items;
}

export default {
  demoPrimaryNav,
  demoSecondaryNav,
};