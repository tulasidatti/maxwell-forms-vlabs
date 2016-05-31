import React from 'react';
import { Link, browserHistory } from 'react-router'
import _ from 'lodash';
import ProductList from './productList.js';

var ProductData = React.createClass({
  getInitialState: function() {
	var rowState =[];
	for(var i = 0; i < this.props.rows.length; i++) {
	  rowState[i] = false;
	}
	return {
	  checkAll: false,
	  rowState:rowState
	};
  },
  checkRow: function (id,value) {
	this.state.rowState[id] = value;
	if (this.state.checkAll) {
	  this.state.checkAll = !this.state.checkAll;
	}
	this.setState({
	  rowState: this.state.rowState,
	  checkAll: this.state.checkAll
	});
  },
  checkAll: function () {
	var rowState =[];
	var checkState = !this.state.checkAll;
	for(var i = 0; i < this.state.rowState.length; i++) {
	  rowState[i] = checkState;
	}
 
	this.state.checkAll = checkState;
 
	this.setState({
	  rowState: rowState,
	  checkAll: this.state.checkAll
	});
  },
  render: function() {
	var self = this;
	var prodcutsLength = this.props.rows.length;
	
	var rows = _.map(this.props.rows, function( row,index) {
	  return (<ProductList obj={row} index={index} key={row.id} checked={self.state.rowState[index]} callback={self.checkRow} products={prodcutsLength}/>);
	});
	  
	return (
	 
	  <div className="container panel">
	  <div className="col-sm-12">
	<section className="panel">
	  <div className="panel-body">
		<div className="row todo-action-bar">

	   <div className="box1">
	   <div className="mainheading"><h3>Delta Dental</h3> 
	   <h4>Enrollment/Changeform</h4>
	   </div>
	  <div className="row">
	<div className="col-md-3 firstblk">
		 
			  <div className="form-group">
				   
					<div className="input-group">
						<input type="text" className="form-control" name="InputName" id="InputName" placeholder="Search product button" required/>
						
					</div>
				   </div> 
	   </div>
	<div className="col-md-3 firstrgt">
		   
		<div className="input-group spinner">
   <select className="form-control"><option>Product Type</option></select>
  </div> 

				</div>
	  <div className="col-md-6 srchbtn">
		
		<button type="button" className="btn btn-primary topsrch">Search</button>
		</div> 
		</div>
	<div className="clearfix"></div>
	
	<div className="table-responsive">
  <table className="table table-condensed table-striped table-bordered table-hover no-margin">
	<thead>
	  <tr>
		<th style={{width: '5%'}} >
		  <input className="no-margin" type="checkbox"  checked={this.state.checkAll} onChange={this.checkAll} />
		</th>
		 <th>Products<p className="assingprod"><a href="#">Assinged Products(3)</a></p></th>
 
	  </tr>
	</thead>
	<tbody>
	  {rows}        
	</tbody>
  </table>
</div>




</div>
		</div>
	  </div>
	  </section>
		</div>
	  </div>
	);
  }
});

	

export default ProductData;