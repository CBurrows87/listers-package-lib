import styled from 'styled-components'
import { Themes } from '../../../../style/GlobalStyle';
import { CheckboxProps } from './ICheckbox';


export const Label = styled.label`
    display: block;
    text-align: left;
    touch-action: manipulation;
    font-weight: 500;
    background-color: ${Themes.color.red100};
`
const HiddenCheckbox = styled.input<CheckboxProps>``;
