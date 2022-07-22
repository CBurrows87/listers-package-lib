import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import {Checkbox} from './Checkbox'

const meta: ComponentMeta<typeof Checkbox> = {
    title: 'Design System/Label',
    component: Checkbox,
};
export default meta;

export const Primary: ComponentStoryObj<typeof Checkbox> = {
    args: {
        disabled: false,
        children: 'Hello',
    },
};
