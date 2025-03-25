import type { Meta, StoryObj } from '@storybook/react';

import Add from '../../common/Add';

const meta = {
  component: Add,
} satisfies Meta<typeof Add>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};