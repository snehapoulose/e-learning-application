import {render,screen} from '@testing-library/react';
import { BrowserRouter as Router  } from 'react-router-dom';
import Header from '../Header';

describe("Test the header component",()=>{
    test ("render the header component with logout button ",async()=>{
        render(<Router><Header/></Router>)
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(2);
    })
    test('  render the header component  with discussion forum icon must have src = "/discussion.png" and alt = "react logo"', () => {
        render(<Router><Header/></Router>);
        const logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src', "discussion.png");
        expect(logo).toHaveAttribute('alt', 'react icon');
      });
})