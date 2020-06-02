import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"

import { Container, Form, Button } from 'react-bootstrap';
const FormPage = () => {
return (
	<Layout>
<Container fluid style={{width: "100%"}}>
<h1 style={{textAlign: "center"}}>Jauns raksts</h1>
			<Form>
			<div className="form-group">
     			 <label htmlFor="formInput">Virsraksts</label>
      				<input
        			type="text"
        			className="form-control"
        			id="formInput"
     				 />
    		</div>
    		<div className="form-group-text">
            	<label htmlFor="formTextArea">Saturs</label>
            		<textarea
            		className="form-control"
            		id="formTextArea"
            		rows="5"
            		/>
       		 </div>
       		<label class="pt-3" htmlFor="formImageUpload">Attēls</label>
        	<div className="input-group">
        		
  				<div className="input-group-prepend">
    				<span className="input-group-text" id="inputGroupFileAddon01">Augšupielādēt</span>
  				</div>
 			 		<div className="custom-file">
   				 		<input
      					type="file"
      					className="custom-file-input"
      					id="formImageUpload"
      					aria-describedby="inputGroupFileAddon01"
    					/>
    				<label className="custom-file-label" htmlFor="inputGroupFile01">
      				Izvēlēties failu
    				</label>
  					</div>
			</div>
			<div class="pt-3">
			<div class="row justify-content-center">
			<Button variant="warning" type="submit">
   						 Saglabāt
 					 </Button>
 					 </div>
 					 </div>


  			</Form>	
			
		</Container>
		</Layout>
		);
};

export default FormPage;