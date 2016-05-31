// To Implement the Tabs feature we inlcuded react-bootstrap
import React from 'react';
import { browserHistory } from 'react-router'
import { Tabs, Tab } from 'react-bootstrap';
import FormInfo from './formInfo.js';
import ProductData from './productData.js';

const Forms = React.createClass({
	getInitialState() {
		return {
			key: 1
		};
	},

	handleSelect(key) {		
		this.setState({key});		
		this.props.params.msg ='';	
		
	},

	render() { 
		return (
			 <div className="container">
				<h1>Add New Form Template</h1>

				<Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
					<Tab className="formInfoTab" eventKey={1} title="Form Info">
					<FormInfo msg={this.props.params.msg}/>
					</Tab>
					<Tab className="ProductsTab" eventKey={2} title="Products"><ProductData rows={rows}/></Tab>					
					<Tab className="EmployersTab"eventKey={3} title="Employers" disabled>Tab 4 content</Tab>
				</Tabs>



			</div>
		);
	}
});
var rows = [
     {
        'id' : 1,
        'productName': 'Dental Pediatric Dental Upside Holdings'
      },
      {
        'id' : 2,
        'productName': 'Dental PPO Prediatric 60 SQOR'
      },
      {
        'id' : 3,
        'productName': 'Enhanced Dental HMO Pediatric for Small Bussiness $20'
      }
    ];
export default Forms;