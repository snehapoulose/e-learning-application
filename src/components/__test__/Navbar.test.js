import {render,screen} from '@testing-library/react';
import { BrowserRouter as Router  } from 'react-router-dom';
import Navbar from '../Navbar';

describe("Test the navbar component",()=>{
    test ("render the navbar component with login heading ",async()=>{
        render(<Router><Navbar/></Router>)
        const titleElement = screen.getByText(/login/i);
        expect(titleElement).toBeInTheDocument();
    })
    test ("render the navbar component with the name of the application ",async()=>{
        render(<Router><Navbar/></Router>)
        const titleElement = screen.getByText(/thinglink/i);
        expect(titleElement).toBeInTheDocument();
    })
})