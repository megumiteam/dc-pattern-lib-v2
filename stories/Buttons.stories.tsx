import React from 'react';
import { Button, Table, Progress } from 'reactstrap';

import { storiesOf } from '@storybook/react';

// target
import '../src/assets/main.css';

storiesOf('Buttons', module).add('Styles', () => (
  <Table className="shifter-ui">
    <thead>
      <tr>
        <td>Primary</td>
        <td>Secondary</td>
        <td>Success</td>
        <td>Danger</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <Button color="primary">Primary</Button>
        </td>
        <td>
          <Button color="secondary">Secondary</Button>
        </td>
        <td>
          <Button color="success">Success</Button>
        </td>
        <td>
          <Button color="danger">Danger</Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button color="primary" disabled>
            Primary Disabled
          </Button>
        </td>
        <td>
          <Button color="secondary" disabled>
            Secondary Disabled
          </Button>
        </td>
        <td>
          <Button color="success" disabled>
            Success Disabled
          </Button>
        </td>
        <td>
          <Button color="danger" disabled>
            Danger Disabled
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button color="primary" className="hover">
            Primary Hover
          </Button>
        </td>
        <td>
          <Button color="secondary" className="hover">
            Secondary Hover
          </Button>
        </td>
        <td>
          <Button color="success" className="hover">
            Success Hover
          </Button>
        </td>
        <td>
          <Button color="danger" className="hover">
            Danger Hover
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button color="primary" className="focus">
            Primary Focus
          </Button>
        </td>
        <td>
          <Button color="secondary" className="focus">
            Secondary Focus
          </Button>
        </td>
        <td>
          <Button color="success" className="focus">
            Success Focus
          </Button>
        </td>
        <td>
          <Button color="danger" className="focus">
            Danger Focus
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button color="primary" active>
            Primary Active
          </Button>
        </td>
        <td>
          <Button color="secondary" active>
            Secondary Active
          </Button>
        </td>
        <td>
          <Button color="success" active>
            Success Active
          </Button>
        </td>
        <td>
          <Button color="danger" active>
            Danger Active
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button disabled className="btn-progress" color="primary">
            <span className="btn-progress__label">Progress Button</span>
            <Progress color="warning" className="bg-danger" animated value="25" />
          </Button>
        </td>
        <td>
          <Button disabled className="btn-progress" color="secondary">
            <span className="btn-progress__label">Progress Button</span>
            <Progress color="warning" className="bg-danger" animated value="50" />
          </Button>
        </td>
        <td>
          <Button disabled className="btn-progress" color="success">
            <span className="btn-progress__label">Progress Button</span>
            <Progress color="warning" className="bg-danger" animated value="75" />
          </Button>
        </td>
        <td>
          <Button disabled className="btn-progress" color="danger">
            <span className="btn-progress__label">Progress Button</span>
            <Progress color="warning" className="bg-danger" animated value="100" />
          </Button>
        </td>
      </tr>
    </tbody>
  </Table>
));
