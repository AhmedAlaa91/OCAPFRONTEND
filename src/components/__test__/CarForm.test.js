import {render , screen} from '@testing-library/react';
import CarForm  ,{formattnumber} from '../cars/CarForm';
import userEvent from "@testing-library/user-event";

describe('Testing Car Form Components',()=>{
   
    test('Test Render all form fields',()=>{
        render(<CarForm/>);
        const DropDownLists = screen.getAllByTestId('select-option')
        expect(DropDownLists).toHaveLength(2);
    })

    test('Test Render all CheckBox fields',()=>{
        render(<CarForm/>);
        const checkboxLists = screen.getAllByTestId('checkbox')
        expect(checkboxLists).toHaveLength(2);
    })


    test('Test Render all Input Number fields',()=>{
        render(<CarForm/>);
        const inputLists = screen.getAllByTestId('number-input')
        expect(inputLists).toHaveLength(2);
    })


    test("Test Drop down values for select car brand",  () => {
        render(<CarForm/>);
        const dropdown = screen.getAllByTestId('select-option');
        expect(dropdown[0].value).toBe('0');
        userEvent.selectOptions(dropdown[0], '1');
        expect(dropdown[0].value).toBe('1');
        
      });


    test("Test Drop down values for select car color",  () => {
        render(<CarForm/>);
        const dropdown = screen.getAllByTestId('select-option');
        expect(dropdown[1].value).toBe('0');
        userEvent.selectOptions(dropdown[1], '1');
        expect(dropdown[1].value).toBe('1');
        
      });

      
    test("Test Car plate number seperator functions",  () => {
        render(<CarForm/>);
        const platnumber=screen.getByPlaceholderText("e.g. : 1 2 3 ا ب ج")
        const plateNumber = '186سعج'
        userEvent.type(platnumber,plateNumber)
        expect(platnumber.value).toMatch('1 8 6 س ع ج')
        
      });

})