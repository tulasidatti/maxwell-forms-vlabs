// 'use strict';

// jest.unmock('../../../client/views/addFormTemplate');
// jest.unmock('react-bootstrap');
// jest.unmock('../../../client/views/formInfo')

// import React from 'react';
// import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
// import Forms from '../../../client/views/addFormTemplate';

// describe('AddFormTemplate', function(){
//   const parentControl = TestUtils.renderIntoDocument(<Forms />);

//   it("Gets form tabs", function () {    
//     const inputs = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'a');
//     expect(inputs.length).toEqual(3);    
//     expect(inputs[0].textContent).toEqual("Form Info")
//     expect(inputs[1].textContent).toEqual("Products")
//     expect(inputs[2].textContent).toEqual("Employers")
//   });
//   
//    it("Gets button control", function () {
//      const textarea = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'form');
//      expect(textarea.length).toEqual(1);
//    });
//   

//   it('formInfoTab should exist', function() {          
//     const formInfoTab  = TestUtils.scryRenderedDOMComponentsWithClass(parentControl, 'formInfoTab');    
//     expect(formInfoTab.length).toEqual(1);  
//   
//   });
//   it('productsTab should exist', function() {          
//     const productsTab = TestUtils.scryRenderedDOMComponentsWithClass(parentControl, 'ProductsTab');
//     expect(productsTab.length).toEqual(1);
//   
//   });

//   it('employersTab should exist', function() {          
//     const employersTab = TestUtils.scryRenderedDOMComponentsWithClass(parentControl, 'EmployersTab');
//     expect(employersTab.length).toEqual(1);    
//   });

//    it('Stimulates click event forminfo tab', function() {    
//     const formInfoTab = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'a')      
//     expect(formInfoTab[0].textContent).toEqual("Form Info");
//     TestUtils.Simulate.click(formInfoTab[0]);    
//    })

//    it('Stimulates click event products tab', function() {    
//     const productsTab = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'a')      
//     expect(productsTab[1].textContent).toEqual("Products");
//     TestUtils.Simulate.click(productsTab[1]);    
//    })

//    it('Stimulates click event employers tab', function() {      
//     const employersTab = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'a')      
//     expect(employersTab[2].textContent).toEqual("Employers");
//     TestUtils.Simulate.click(employersTab[2]);    
//    })

// });