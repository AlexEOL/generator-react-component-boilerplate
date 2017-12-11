import <%= componentName %> from '../src/<%= packageName %>';
import { shallow } from 'enzyme';
import React from 'react';

describe('<%= componentName %>', () => {
  describe('Mounting', () => {
    it('should render into the document', () => {
      const component = shallow(<<%= componentName %> />);
      expect(component).toBeDefined();
    });
  });
});
