import {render,screen,waitFor} from '@testing-library/react'
import RegisteredUser from '../../pages/RegisteredUser'
import { BrowserRouter as Router } from 'react-router-dom'
describe('Test the registered user component ', () => {
    test("render the privilegedUser component with Book Hotel button", async() => {
        render(<Router><RegisteredUser/></Router>)
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(4);
    })
    test("should render the course names when api responds",async()=>{
        render(<Router><RegisteredUser/></Router>);
        await waitFor(()=>{
          screen.getByText("qui est esse");
        });
      }) 
});
