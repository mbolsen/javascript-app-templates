// Import setup from test-utils file
import { render, fireEvent, screen } from 'test-utils';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from '../header/Header.jsx';

// Good example of testing - https://www.samdawson.dev/article/react-context-testing
describe('<Header />', () => {
  beforeEach(() => {
    //render the first thing, which is usually the header.
    render(<Header />);
  });
  // This is a basic structure for the tests
  test('loads text ......', () => {
    // Arrange = render the starting component
    // render(<NavBar />);

    // Act = do something on that component (i.e. click on it)

    // Assert = tests you want to do here
    expect(screen.getByText('FILL_ME_IN')).toBeInTheDocument();
  });

  //Click to navigate/render a new component, then run tests with what is on the page now
  describe('Clicking Login changes pages', () => {
    beforeEach(async () => {
      userEvent.click(screen.getByText('FILL_ME_IN'));
    });

    test('loads FILL_ME_IN', async () => {
      // the full text needs to be in the test not just partial
      const text = await screen.getByText('FILL_ME_IN');
      expect(text).toBeInTheDocument();
    });
  });
});