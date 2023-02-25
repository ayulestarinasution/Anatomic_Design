import AtomParagraf from "../components/atoms/paragraf";
import AtomButton from "../components/atoms/button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form , FormControl  } from 'react-bootstrap';
import Barang from "../components/molecules/barang";
export default function Test(){
 return(<> 
  <Navbar bg="dark" variant="dark" >
    <Navbar.Brand href="#">DevChallengeio</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className=" color: #F7542E" href="">Typography</Nav.Link>
      <Nav.Link href="#">Grid</Nav.Link>
      
    </Nav>
   
  </Navbar>
  <div className="row container">
 <AtomParagraf 
 value="list nama pengunjung" 
 size="24px"
  weight="900" 
  color="blue"/>

 <AtomParagraf
  margin="20px 0px 0px" 
  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." size="24px" color="black"/>
 
 <AtomButton 
 margin="40px 0px 0px" 
 value="learn more" 
  background="blue" 
  border="none" 
  padding="10px 20px" 
  color= "#FFFFFF"
  />
  <center>
 <div  className="mt-4" style={{width:"100%", background:"#F9F9F9" , height:"512px"}}>
  TESTING
<div className="row container">
<div className="col-12" pt-5>
<div className="col-12" text-left>
  <AtomParagraf  weight="bold" size="24px" lineHeight="30px"/>
</div>
<div className="col-3"/><Barang/></div>
<div className="col-3"/>
<div className="col-3"/>
<div className="col-3"/>

 </div>
 </div>
 </center>
 </div>
 </>);
}