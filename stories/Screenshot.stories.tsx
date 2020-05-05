import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Browser from '../src/components/browser';
import Screenshot from '../src/components/screenshot';

// target
import '../src/assets/main.css';

storiesOf('Screenshot.Elements', module).add(
  'Browser',
  withInfo()(() => <Browser className="bg-purple-dark" />),
);
storiesOf('Screenshot', module).add(
  'Fallback and Browser',
  withInfo()(() => <Screenshot browser />),
);
storiesOf('Screenshot', module).add(
  'With Browser',
  withInfo()(() => (
    <Screenshot
      browser
      src="https://images.unsplash.com/photo-1471421298428-1513ab720a8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
    />
  )),
);
storiesOf('Screenshot', module).add(
  'Without Browser',
  withInfo()(() => <Screenshot src="https://placehold.it/1000x600" />),
);
storiesOf('Screenshot', module).add(
  'With Browser and Link',
  withInfo()(() => (
    <Screenshot browser href="https://www.getshifter.io" src="https://placehold.it/1000x600" />
  )),
);
