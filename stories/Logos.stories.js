import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from 'reactstrap';
import { Logo } from '../src/Logos';

storiesOf('Logos', module).add('Styles', () => (
  <Table>
    <tr>
      <td>
        <Logo />
      </td>
      <td>
        <Logo logoStyle="logomark-ko-white" />
      </td>
      <td>
        <Logo logoStyle="logomark-color" />
      </td>
      <td>
        <Logo logoStyle="logomark-ko-black" />
      </td>
      <td>
        <Logo logoStyle="primary-ko-white" />
      </td>
      <td>
        <Logo logoStyle="primary-color-black" />
      </td>
      <td>
        <Logo logoStyle="primary-color-white" />
      </td>
    </tr>
  </Table>
));
