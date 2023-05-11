import {render,screen,waitFor} from '@testing-library/react'
import Admin from '../../pages/Admin'
import { BrowserRouter as Router } from 'react-router-dom'
describe('Test the admin component', () => {
    test("render the login form with login button ", async ()=>{
        render(<Router><Admin/></Router>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(3);
    });
    test("should render the course names when api responds",async()=>{
        render(<Router><Admin/></Router>);
        await waitFor(()=>{
          screen.getByText("qui est esse");
        });
      })
});
