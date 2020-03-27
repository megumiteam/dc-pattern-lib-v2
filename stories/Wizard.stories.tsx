import React from 'react';
import {
  Card, CardTitle, CardBody, CardFooter, ButtonGroup, Button,
} from 'reactstrap';
import { storiesOf } from '@storybook/react';
import '../src/assets/main.css';

storiesOf('Wizard', module).add('Example', () => {
  const steps = [
    {
      title: 'Step 1',
      color: 'success',
      active: true,
    },
    {
      title: 'Step 2',
      color: 'light',
      active: false,
    },
    {
      title: 'Step 3',
      color: '',
      active: false,
    },
    {
      title: 'Step 4',
      color: '',
      active: false,
    },
  ];

  return (
    <Card className="wizard">
      <CardBody>
        <CardTitle>Attach a domain</CardTitle>
        <div className="d-flex justify-content-between">
          {steps.map((step) => (
            <div
              className={`flex-grow-1 text-center wizard-step ${
                step.active ? 'wizard-step--active' : 'text-muted'
              }`}
            >
              {step.title}
              <hr />
            </div>
          ))}
        </div>
      </CardBody>
      <CardFooter className="d-flex justify-content-center">
        <ButtonGroup>
          <Button color="primary">Previous</Button>
          <Button color="primary">Next</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
});
