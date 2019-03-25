import { configure } from '@storybook/react';

const requireContext = require.context('../src', true, /\.story.jsx?$/);

const _loadStories = () => {
  requireContext.keys().forEach(story => requireContext(story));
};

configure(_loadStories, module);
