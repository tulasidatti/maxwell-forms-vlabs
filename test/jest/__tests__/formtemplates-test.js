// 'use strict';
// //jest.autoMockOff();
// jest.unmock('../../../client/views/formTemplates');
// jest.unmock('../../../client/views/vendor');
// jest.unmock('../../../client/views/state');
// jest.unmock('react-router');
// jest.unmock('history');

// import React from 'react';
// import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
// import { browserHistory } from 'react-router'
// import FormTemplate from '../../../client/views/formTemplates';
// import stubRouterContext from './stubRouterContext';



// describe('FormTemplate', () => {

//   var onClickFunc, 
//         formTemplate,
//         formTemplateFinal;

//     /*beforeEach(function() {
//     onClickFunc = jest.genMockFunction();

//     });*/
// 	beforeEach(function() {
//       FormTemplate.prototype.contextTypes = {
//         router: function() {console.log("i reached hjre")
//           return {
//             push: jest.genMockFunction()
//           };
//         }
//        }
//       });


//   const parentControl = TestUtils.renderIntoDocument(<FormTemplate />);

//   it("Gets all four input type textboxes", function () {    
//     const inputs = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'input');
//     expect(inputs.length).toEqual(4);
//     expect(inputs[0].placeholder).toEqual("Form Name or ID");
//     expect(inputs[1].placeholder).toEqual("Vendor");
//     expect(inputs[2].placeholder).toEqual("Product Type");
//     expect(inputs[3].placeholder).toEqual("State");    
//   });
//   
//   it("Gets button control", function () {
//     const textarea = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'button');
//     expect(textarea.length).toEqual(2);
//   });

//    it('Stimulates click event of Add new Form Button', function() {
//       var Subject = stubRouterContext(FormTemplate);
//       formTemplate = TestUtils.renderIntoDocument(<Subject/>);
		
//       var button = TestUtils.scryRenderedDOMComponentsWithTag(formTemplate, 'button');
// console.log(button[0].textContent);
//       TestUtils.Simulate.click(button[0]);          
//    });
// });
