import type { Meta, StoryObj } from '@storybook/react';
import Add from './Add';
import { SvgSize } from '../util';

const meta: Meta<typeof Add> = {
  title: "common/Add",
  component: Add,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const xs: Story = {
  name: "xs",
  args:{
    className: 'add',
    size: SvgSize.xs,
  },
};

export const sm: Story = {
  name: "sm",
  args:{
    className: 'add',
    size: SvgSize.sm,
  },
};

export const md: Story = {
  name: "md",
  args:{
    className: 'add',
    size: SvgSize.md,
  },
};

export const lg: Story = {
  name: "lg",
  args:{
    className: 'add',
    size: SvgSize.lg,
  },
};

export const xl: Story = {
  name: "xl",
  args:{
    className: 'add',
    size: SvgSize.xl,
  },
};