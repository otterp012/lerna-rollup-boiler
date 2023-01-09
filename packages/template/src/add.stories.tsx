import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import mdx from './add.mdx';
import { Grid } from './Grid';

import styled from 'styled-components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Test1',
  component: Grid,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Grid>;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
// styled component

export const Test = () => {
  return (
    <>
      <Title>123</Title>
      <Grid />
    </>
  );
};

// https://github.com/storybookjs/storybook/issues/13671
// props table 관련 displayname 이슈

// https://storybook.js.org/docs/react/writing-stories/stories-for-multiple-components
