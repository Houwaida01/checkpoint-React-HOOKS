import React from 'react';
import {Navbar,Container,Form,FormControl,Button} from 'react-bootstrap'
function NavBar({search ,setSearch}) {
  return (<div>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
 
       
      <Form className="d-flex">
        <FormControl
        onChange={(e)=>setSearch(e.target.value)}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>);
}

export default NavBar;
