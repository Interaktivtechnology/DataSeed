import React, { Component, PropTypes } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { Form, Input, FormGroup, FormControl, Button } from 'react-bootstrap'

var tables = [
  {
      field_name: 'ID',
      types: "Auto Number",
      options: "Unique, blank=0%"
  },
  {
      field_name: 'FirstName',
      types: "First Name",
      options: "locale=\"id_ID\""
  },
  {
      field_name: 'LastName',
      types: "Last Name",
      options: "locale=\"id_ID\""
  },
  {
      field_name: 'Email',
      types: "Email",
      options: "blank=0%"
  },
  {
      field_name: 'Gender',
      types: "Gender",
      options: "blank=20%"
  }
];

class HomeTable extends Component {

	btnClick(){
		alert("clicked");
	}

	changeHandler(event){
	  console.log(event.target.value);
	}

  render() {

    return(
    	<div>
      	<div id="tableData" className="row">
              <div className="col-md-6">
                  <BootstrapTable data={tables} striped={true} hover={true} >
                    <TableHeaderColumn dataField="field_name" isKey={true} dataAlign="center" dataSort={true}>Field Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="types" dataSort={true}>Types </TableHeaderColumn>
                    <TableHeaderColumn dataField="options" >Options</TableHeaderColumn>
                  </BootstrapTable>
              </div>
          </div>
          <div className="row">
          <div className="col-md-6">
              <Button bsStyle="default" className="addBtn" onClick={this.btnClick}>Add New Field</Button>
              <Button bsStyle="default" className="importBtn" onClick={this.btnClick}>Import</Button>
          </div>
      </div>
      <div className="row">
          <div className="col-md-6">
			<Form inline>
				<FormGroup controlId="formInlineRows">
		      		<FormControl type="text" placeholder="#Number of Rows" />
			 	</FormGroup>
			    <FormGroup controlId="formInlineFileName">
			    	<FormControl type="text" placeholder="File Name" />
			    </FormGroup>
			    <FormGroup controlId="formInlineType">
			        <FormControl componentClass="select" placeholder="select">
				      <option value="CSV">CSV</option>
			          <option value="PDF">PDF</option>
			          <option value="DOC">DOC</option>
				  	</FormControl>
			    </FormGroup>
			  </Form>
			  <hr />
			  <Button bsStyle="primary" className="downloadBtn" onClick={this.btnClick}>Download</Button>
          </div>
      </div>

     </div>
    )
  }
}

export default (HomeTable)
