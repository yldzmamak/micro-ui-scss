import React from 'react';
import { baseTheme } from './base-theme';

export function ReturnsCorrectValue() {
  return <div>{baseTheme()}</div>;
}
