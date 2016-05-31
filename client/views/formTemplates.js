import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { InputGroup, Button, Row, Col, Grid } from 'react-bootstrap';
import StateControl from './state'
import VendorControl from './vendor'

const FormTemplates = React.createClass({
	getInitialState() {
		return {
			key: 1
		};
	},

	handleSelect(key) {		
		this.setState({key});		
	},

	contextTypes: {
    	router: React.PropTypes.object.isRequired    	
  	},

	navigate(event) {
      event.preventDefault() 
 	  this.context.router.push('/addFormTemplate')  			
   },

	render(){
		return (
			<div className="container"> 
				<div className="row">  
					<Grid>
						<Row className="show-grid">
							<Col md={9}> <h1>Form Templates</h1> </Col>
							<Col md={3}><button className="btn btn-default btn-lg pull-right" onClick={this.navigate}>Add New Form Template</button></Col>
						</Row>
					</Grid>
					<InputGroup>
						<Row>
						<Col md={4}>
							<input type="text"  placeholder="Form Name or ID" className="form-control" maxlength="5"/>
						</Col>
						<Col md={2}>
							<VendorControl name="Vendor"/>
						</Col>
						<Col md={2}>
							<input type="text"  placeholder="Product Type" className="form-control" />
						</Col>
						<Col md={2}>
							<StateControl name="State"/>
						</Col>
						<Col md={2}>
							 <Button className="btnSearch" bsStyle="primary">Search</Button>             
						</Col>
						</Row>
					</InputGroup>
					<hr className="hrblack"/>   
					<div>                   
						<em>Use search above to display forms</em>
					</div>  
				</div>
			</div>
		); 
	}
});

export default FormTemplates;



