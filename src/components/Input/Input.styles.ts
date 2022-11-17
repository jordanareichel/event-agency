import styled, { css } from 'styled-components';

import { Icon2 } from '../Icon2';

import { InputProps, ContainerProps, InputIconProps } from './Input.types';

const cssWithValue = css<{ color?: string }>`
  input {
    padding-top: 16px;
    color: white;
    background-color: #323238;
  }

  label {
    top: 10px;
    font-size: 12px;
  }
`;

export const Wrapper = styled.div<ContainerProps & { withValue: boolean }>`
  ${({
    block,
    color,
    disabled,
    withValue,
    radius = 4,
    iconPosition = 'right',
  }) => css`
    border-radius: ${radius}px;
    width: ${block ? '100%' : 'auto'};
    border-color: #202024;
    background-color: #323238;

    label,
    input {
      font-size: 16px;
      line-height: 24px;
      color: white;

      /* padding total before condition by icon position */
      padding: 8px;
      ${iconPosition !== 'none' ? `padding-${iconPosition}: 40px` : ''};
    }

    &:hover {
      border-color: ${!disabled ? color : '#545D69'};

      label,
      input {
        color: white;
      }
    }

    &:focus-within {
      border-color: ${!disabled ? color : '#545D69'};

      ${cssWithValue}
      label {
        color: white;
      }
    }
    ${withValue ? cssWithValue : ''}
  `}
  display: flex;
  overflow: hidden;
  min-height: 54px;
  border-width: 1px;
  position: relative;
  border-style: solid;
  align-items: center;
`;

export const TextInput = styled.input<InputProps>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  position: absolute;
`;

export const IconInput = styled(Icon2)<InputIconProps>`
  ${({ position = 'right' }) => css`
    ${position}: 12px;
  `}
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
`;
