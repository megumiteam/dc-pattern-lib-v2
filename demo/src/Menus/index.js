import _ from 'lodash';

export function demoNav() {
  const labels = {
    navLabels: {
      name: 'Menu Title'
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
  demoNav,
};