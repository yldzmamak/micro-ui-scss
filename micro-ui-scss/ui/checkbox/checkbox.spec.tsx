import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BasicCheckbox } from './checkbox.composition';

const CHECKBOX_ID = 'my-checkbox';

it('should render with the correct text', () => {
  const { getByTestId } = render(<BasicCheckbox />);
  const checkbox = getByTestId(CHECKBOX_ID);
  expect(checkbox).toHaveProperty('checked', false);
  fireEvent.click(checkbox);
  expect(checkbox).toHaveProperty('checked', true);
  fireEvent.click(checkbox);
  expect(checkbox).toHaveProperty('checked', false);
});
