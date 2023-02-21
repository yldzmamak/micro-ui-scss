/* import React from 'react';
import classNames from 'classnames'
import styles from './checkbox.module.scss'

export type CheckboxProps = {
  /**
   * a text to be rendered in the component.
   
  text: string
} & React.HTMLAttributes<HTMLDivElement>;

export function Checkbox({ text, className }: CheckboxProps) {
  return (
    <div className={classNames(styles.checkbox, className)}>
      {text}
    </div>
  );
} */

/* import React from 'react';
import { Checkbox as AntCheckbox, CheckboxProps } from 'antd';

export type CustomCheckboxProps = CheckboxProps & {
  projectType?: string;
};

export function Checkbox({ ...otherProps }: CustomCheckboxProps) {
  return <AntCheckbox  data-testid="clickable-checkbox-1234" {...otherProps} />;
}; */

import React from 'react';
import { Checkbox as AntCheckbox, CheckboxProps } from 'antd';
import styles from './checkbox.module.scss';
import classNames from 'classnames';

import styled from 'styled-components';

import './checkbox.module.scss';

export type CustomCheckboxProps = CheckboxProps & {
  projectType?: string;
};

/* export const StyledHeader = styled.header`
  background-color: pink;

  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: #64d0d4;
  }

  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled):after {
    border-color: #64d0d4 !important;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #64d0d4 !important;
    border-color: #64d0d4 !important;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #64d0d4 !important;
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: #64d0d4 !important;
  }

  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #64d0d4;
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: #64d0d4;
    border-color: #64d0d4;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #64d0d4;
    border-color: #64d0d4;
  }
`; */

export function Checkbox({ className, ...otherProps }: CustomCheckboxProps) {
  return (
    <div className={classNames(styles.deneme, className)}>
      <AntCheckbox
        className={classNames(styles.deneme, styles.ant , className)}
        data-testid="my-checkbox"
        name="cb"
        {...otherProps}
      />
    </div>
  );
}
