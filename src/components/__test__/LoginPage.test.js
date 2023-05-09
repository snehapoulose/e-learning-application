import {render,screen} from '@testing-library/react';
import LoginPage from '../../pages/LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Test the login component', () => {
    test("render the login form with login button ", async ()=>{
        render(<Router><LoginPage/></Router>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
    });
    test(" render the login form should correctly set default option for the role", () => {
        render(<Router><LoginPage/></Router>)
        expect(screen.getByRole('option', { name: 'Select a role' }).selected).toBe(true)
      })
      test("render the login form with correct number of role options ", () => {
        render(<Router><LoginPage/></Router>)
        expect(screen.getAllByRole('option').length).toBe(4)
      })
      test ("render the login form with username label",async()=>{
        render(<Router><LoginPage/></Router>)
        expect(screen.getByLabelText('Username:')).toBeInTheDocument();
    })
    test ("render the login form with password label",async()=>{
        render(<Router><LoginPage/></Router>)
        expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    })
});
