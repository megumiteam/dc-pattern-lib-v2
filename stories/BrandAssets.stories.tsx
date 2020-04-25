import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { Table } from 'reactstrap';
import Brand from '../src/components/brand';
// import DashboardCard from '../src/DashboardCard';

const shifter = [
  { name: 'logo', id: 'shifter-logo' },
  { name: 'logo-dark', id: 'shifter-logo-dark' },
  { name: 'logo-light', id: 'shifter-logo-light' },
  { name: 'mark', id: 'shifter-mark' },
  { name: 'mark-light', id: 'shifter-mark-light' },
  { name: 'mark-dark', id: 'shifter-mark-dark' },
];

const amimoto = [
  { name: 'logo', id: 'amimoto-logo' },
  { name: 'logo-light', id: 'amimoto-logo-light' },
  { name: 'logo-dark', id: 'amimoto-logo-dark' },
  { name: 'mark', id: 'amimoto-mark' },
  { name: 'mark-light', id: 'amimoto-mark-light' },
  { name: 'mark-dark', id: 'amimoto-mark-dark' },
];

const digitalcube = [
  { name: 'logo', id: 'dc-logo' },
  { name: 'logo-light', id: 'dc-logo-light' },
  { name: 'logo-dark', id: 'dc-logo-dark' },
  { name: 'mark', id: 'dc-mark' },
  { name: 'mark-light', id: 'dc-mark-light' },
  { name: 'mark-dark', id: 'dc-mark-dark' },
];

shifter.map((asset) => {
  storiesOf('Brand Assets.Shifter.Logos', module).add(
    asset.name,
    withInfo()(() => <Brand asset={asset.id} />),
  );
});

amimoto.map((asset) => {
  storiesOf('Brand Assets.Amimoto.Logos', module).add(
    asset.name,
    withInfo()(() => <Brand asset={asset.id} />),
  );
});

digitalcube.map((asset) => {
  storiesOf('Brand Assets.DigitalCube.Logos', module).add(
    asset.name,
    withInfo()(() => <Brand asset={asset.id} />),
  );
});
