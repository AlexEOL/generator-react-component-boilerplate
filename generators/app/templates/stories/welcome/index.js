import { Welcome } from '@storybook/react/demo';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('Welcome', module).add('to Storybook', () => (<Welcome showApp={linkTo('Button')} />));
