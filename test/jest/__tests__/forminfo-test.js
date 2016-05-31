'use strict';

jest.unmock('../../../client/views/formInfo');
jest.unmock('../../../client/views/vendor');
jest.unmock('../../../client/views/state');
jest.unmock('react-router');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import FormInfo from '../../../client/views/formInfo';
import { browserHistory, Router, Route, Link } from 'react-router'


describe('FormInfo', () => {
  
   const parentControl = TestUtils.renderIntoDocument(<FormInfo />);

  /*it("Gets all three input type textboxes", function () {    
    const inputs = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'input');
    expect(inputs.length).toEqual(3);
  });
  
  it("Gets TextArea field", function () {
    const textarea = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'textarea');
    expect(textarea.length).toEqual(1);
  });

  it("Should get form", function () {
    const formInfo = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'form');
    expect(formInfo.length).toEqual(1);
  });

  it("Gets TextArea field", function () {
    const inputFile = TestUtils.scryRenderedDOMComponentsWithClass(parentControl, 'form-control-file');
    expect(inputFile.length).toEqual(1);
  });*/

  it('should not submit the form when it is not valid', () => {
    const inputs = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'input');
    
       //var sessionStub =  TestUtils.Simulate.click();
       //btn btn-info pull-right
      
       var btnSave = inputs[4];
      

       
          console.log(inputs[0].name)      
          console.log(inputs[0].maxLength);

      inputs[0].value = null;
      TestUtils.Simulate.click(btnSave);

   //expect(sessionStub).to.not.have.been.called;
    });

  /*it("Saves input values", function () {
    
    ["input"].forEach(function (key) {            
    var input = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, key);
    console.log("key" + key);
    console.log(input[0].name);
    TestUtils.Simulate.change(input[0],  {target: {value: "Maxwell" + input[0].name, name: key}});    
    });
  });

  it('should add new form name to textbox', function() {
    var items = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'input');
      expect(items.length).toEqual(5);

    
      expect(inputs[0].length).toEqual(1);
      
      TestUtils.Simulate.change(formname,{target: {value: 'food 1'}});

      TestUtils.Simulate.submit(
        TestUtils.findRenderedDOMComponentWithTag(parentControl, 'formInfo')
      );

      items = TestUtils.scryRenderedDOMComponentsWithClass(parentControl, 'form-control formname');
      expect(items.length).toEqual(1);
  });

  it("Should save on submit", function(){
    const formInfo = TestUtils.scryRenderedDOMComponentsWithTag(parentControl, 'formInfo');
    parentControl.done = jest.genMockFunction();
    parentControl.insideDone = jest.genMockFunction();
    TestUtils.Simulate.submit(formInfo);    
    expect(parentControl.insideDone).toBeCalled(); //Success
  });*/
});