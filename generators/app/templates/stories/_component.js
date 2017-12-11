import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { <%= componentName %> } from '../../src';
import React from 'react';

storiesOf('<%= componentName %>', module)
  .add('simple example', () => (
    <<%= componentName %>
      onClick={action('onClick')}
    >
      Button
    </<%= componentName %>>
  ));
