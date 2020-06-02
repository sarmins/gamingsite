import React from "react";
import { Container, Form, Button} from 'react-bootstrap';
import Layout from "../components/layout"

const FormRegPage = () => {
return (
<Layout>
<Container fluid style={{width: "100%"}}>
<h1 style={{textAlign: "center"}}>Reģistrācija</h1>
      <Form>
      <div className="form-group">
           <label htmlFor="formInput">Lietotājvārds</label>
              <input
              type="text"
              className="form-control"
              id="formUsername"
             />
        </div>
      <div className="form-group">
           <label htmlFor="formInput">Vārds</label>
              <input
              type="text"
              className="form-control"
              id="formName"
             />
        </div>
      <div className="form-group">
           <label htmlFor="formInput">Uzvārds</label>
              <input
              type="text"
              className="form-control"
              id="formSurname"
             />
        </div>
      <div className="form-group">
           <label htmlFor="formInput">E-pasts</label>
              <input
              type="email"
              className="form-control"
              id="formEmail"
             />
        </div>
      <div className="form-group">
           <label htmlFor="formInput">Parole</label>
              <input
              type="password"
              className="form-control"
              id="formPassword"
              validate
             />
        </div>
      <div className="form-group">
           <label htmlFor="formInput">Parole atkārtoti</label>
              <input
              type="password"
              className="form-control"
              id="formValidatePassword"
              validate
             />
        </div>
      <div class="pt-3">
      <div class="row justify-content-center">
      <Button variant="warning" type="submit">
               Reģistrēties
           </Button>
           </div>
           </div>
</Form>
</Container>
</Layout>
);
};

export default FormRegPage;