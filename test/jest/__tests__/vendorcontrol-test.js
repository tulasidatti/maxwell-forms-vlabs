// 'use strict';

// jest.unmock('../../../client/views/vendor');

// import React from 'react';
// import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
// import VendorControl from '../../../client/views/vendor';

// describe('VendorControl', () => {
// 	var textboxUsingTag, textboxUsingClass;

// 	it('changes the text after click', () => {		
// 		const divControl = TestUtils.renderIntoDocument(<VendorControl />);
		
// 		//Using Tag			
// 		textboxUsingTag = TestUtils.findRenderedDOMComponentWithTag(divControl, 'input');
// 		expect(textboxUsingTag.className).toEqual('form-control');

// 		//Using class
// 		textboxUsingClass = TestUtils.findRenderedDOMComponentWithClass(divControl, 'form-control');		
// 		expect(textboxUsingClass.type).toEqual('text');
// 	});
// });