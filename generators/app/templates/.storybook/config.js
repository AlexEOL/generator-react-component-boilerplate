import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/_index');
}

configure(loadStories, module);
