import type { Meta, StoryObj } from '@storybook/react';
import City from './City';
import { SvgSize } from '../util';

const meta: Meta<typeof City> = {
  title: "common/City",
  component: City,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const md: Story = {
  name: "md",
  args:{
    className: "fill-blue-500",
    size: SvgSize.md,
  },
};

export const lg: Story = {
  name: "lg",
  args:{
    className: "fill-blue-500",
    size: SvgSize.lg,
  },
};