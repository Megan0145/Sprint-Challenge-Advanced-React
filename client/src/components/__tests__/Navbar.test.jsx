import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navbar from '../Navbar';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Navbar />);
});

describe('Navbar component', () => {
  it('debugs output', () => {
    tools.debug();
  });
  it('Renders title of site', () => {
    expect(tools.queryByText(/Womens Football/)).toBeInTheDocument();
  });

  it('changes background color of site in dark mode on button click && header font-color', () => {
    const darkBtn = tools.queryByTestId('darkBtn');
    const header = tools.queryByTestId('header');
    const docBody = document.querySelector('body');
    rtl.fireEvent.click(darkBtn);
    expect(header).toHaveStyle('color:', '#000000');
    expect(docBody).toHaveStyle('background-color:', '#113c78');
  });

});