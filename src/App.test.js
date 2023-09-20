import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('performs basic addition', async () => {
  const { getByText, getByTestId } = render(<App />);

  // Ingresa los números y realiza la suma
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  
  // Espera a que aparezca el resultado en el span
  await waitFor(() => {
    const resultElement = getByTestId('result');
    expect(resultElement).toHaveTextContent('3');
  });
});

test('performs basic subtraction', async () => {
  const { getByText, getByTestId } = render(<App />);

  // Ingresa los números y realiza la resta
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));

  // Espera a que aparezca el resultado en el span
  await waitFor(() => {
    const resultElement = getByTestId('result');
    expect(resultElement).toHaveTextContent('2');
  });
});

test('performs basic multiplication', async () => {
  const { getByText, getByTestId } = render(<App />);

  // Ingresa los números y realiza la multiplicación
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));

  // Espera a que aparezca el resultado en el span
  await waitFor(() => {
    const resultElement = getByTestId('result');
    expect(resultElement).toHaveTextContent('12');
  });
});

test('performs basic division', async () => {
  const { getByText, getByTestId } = render(<App />);

  // Ingresa los números y realiza la división
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));

  // Espera a que aparezca el resultado en el span
  await waitFor(() => {
    const resultElement = getByTestId('result');
    expect(resultElement).toHaveTextContent('3');
  });
});





