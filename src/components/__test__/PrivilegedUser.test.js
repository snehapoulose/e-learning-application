import {render,screen,waitFor} from '@testing-library/react'
import PrivilegedUser from '../../pages/PrivilegedUser'
import { BrowserRouter as Router } from 'react-router-dom'
describe('Test the privileged user component', () => {
    test("render the privilegedUser component with Book Hotel button", async() => {
        render(<Router><PrivilegedUser/></Router>)
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(3);
    })
    test("should render the course names when api responds",async()=>{
        render(<Router><PrivilegedUser/></Router>);
        await waitFor(()=>{
          screen.getByText("qui est esse");
        });
      })
    
});
