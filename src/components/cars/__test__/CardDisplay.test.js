import {render , screen } from '@testing-library/react';
import CarDisplay  from '../CarDisplay';
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';

describe('Testing Car Display Components',()=>{
   
    test('Test Render Slide',()=>{
        render(<BrowserRouter ><CarDisplay/></BrowserRouter>);
        const SplideLists = screen.getAllByTestId('Splide-test')
        expect(SplideLists).toHaveLength(1);
    })

    test('Test Render Link',()=>{
        render(<BrowserRouter ><CarDisplay/></BrowserRouter>);
        const LinkLists = screen.getAllByRole('link')
        expect(LinkLists).toHaveLength(1);
    })


    test('Test Link Button Functionality ', async ()=>{
        render(<BrowserRouter ><CarDisplay/></BrowserRouter>);
        userEvent.click(screen.getByRole('link'))
        expect(screen.getByRole('link')).toHaveAttribute('href', '/carform/')
      
    })


  

})
