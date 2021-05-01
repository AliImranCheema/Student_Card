import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./images/aic.jpg";
import desgin from "./design.css";
import Table from "react-bootstrap/Table";
import { Collapse } from "bootstrap";


class App extends React.Component{
  render(){
    return(

  <Card className="card" style={{width : "30rem"}}>

      <Card.Header className="card_header" as="h2">
        Ali Imran Cheema
        <Card.Img className="card_img" src={img1}></Card.Img>
      </Card.Header>

      <Card.Body className="card_body">
        <Table className="card_table" stripped bordered hover> 
          <thead>
            <tr>
              <th>Father Name</th>
              <th style={{textAlign : "center"}}>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Munawar Hussain Cheema</td>
              <td>aliimrancheema1@gmail.com</td>
              <td>Manpur PO Sahowala Sambrial Sialkot</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>

      <Card.Footer className="card_footer">
       <Button variant="primary">To view full details</Button>
      </Card.Footer>
  </Card>

    );
  }
}
export default App;


