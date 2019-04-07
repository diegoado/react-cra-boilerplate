import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role='img' aria-label='smile'>
        😀
      </span>
      <span role='img' aria-label='cool'>
        😎
      </span>
      <span role='img' aria-label='ok'>
        👍
      </span>
      <span role='img' aria-label='one-hundred'>
        💯
      </span>
    </Button>
  ));
