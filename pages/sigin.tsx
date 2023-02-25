import "bootstrap/dist/css/bootstrap.min.css";
import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import ContactItem from "../components/atoms/ContactItem";
import MoleculesInputForm from "../components/molecules/input_form";
import AtomParagraf from "../components/atoms/paragraf";
import { Navbar,  Nav, NavDropdown} from "react-bootstrap";


export default function signIn() {
 return (<>
      <Navbar bg="light" >
  <Navbar.Brand href="#home" style={{marginRight:"130px"}}><img src="/homepage/Logo_Brand.png"  /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className=" text-black">
    <NavDropdown className="text-bold" 
   title="Research" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
      </NavDropdown>
      <NavDropdown style={{marginRight:"39px"}} title="Advisory" id="basic-nav-dropdown">
      </NavDropdown>
      <Nav.Link href="#link" style={{marginRight:"25px"}}>Project Implementation</Nav.Link>
      <Nav.Link href="#link">Events</Nav.Link>
      <Nav.Link href="#link" style={{marginRight:"200px"}}>About Us</Nav.Link> 
    </Nav>
   
      <img src="/homepage/Search.png"  style={{marginRight:"70px"}}/>
      <img src="/homepage/Vector.png" style={{marginRight:"89px"}} />
    
  </Navbar.Collapse>
</Navbar>
<div className="row container">
<div className="d-flex">
<div className="p-2 flex-grow-1">
<AtomParagraf 
 value="lets's stay connected" 
 size="24px"
  weight="900" 
  color="green"/>
   </div>

<div className="p-2">
<div className="flex-items-center text-white/60">
<AtomButton
value="Open Position"
color="white"
border="none" 
padding="10px 20px" 
background="green"

/>
</div>
</div>
<div className="p-2">
<AtomButton
                
                value="About Us"
                color="black"
                width="100%"
                background="white"
                height="52px"
               
              />
              </div>
              
              </div>
              <div className="d-flex">
                <div className="p-2 flex-grow-1">

           
         <AtomParagraf
 
  value="It's never been easier to get in touch with Flex. Call us, use our live chat widget or email and we'll get back to you as soon as possible!." size="24px" color="black"/>
<div className="col-md-6 text-left pl-3 pr-3">
<AtomText size="12px" weight="bold" value="" />
</div>
</div>

<div className="row container">
<div className="p-2">

                    </div>
                </div>
<div className="row container">
<MoleculesInputForm

value="Email"
height="61px"
customClass="mt-12"
/>
<MoleculesInputForm

value="Massege"
type="password"
height="200px"
customClass="mt-3"
/>

<div className="p-2">
<AtomButton

value="send"
color="white"
width="100%"
border="70px" 
padding="10px 20px" 
background="green"
height="52px"

/>

                </div>
                </div>
                </div>
</div>
<div className="row container">
   <div className="d-flex flex-row mb-4">
        <div className="p-2">
        <ContactItem 

label="Email"
value="contact@flex.co"
icon="/email.jpeg"
className="mt-10"
/>
</div>
     <div className="p-2">
        
        <ContactItem 
                            label="Phone"
                            value="+7-843-672-431"
                            icon="/Telp.jpeg" 
                            className="mt-7"
                        />
                        </div>
        <div className="p-2">
        <ContactItem 
                            label="Office"
                            value="1686, Geraldine Lane  New York,"
                         
                            icon="/lokasi.jpeg"
                            className="mt-6"
                        />
                        </div>
                        <div className="p-2">
        
      <ContactItem 
                            label="Socials" 
                            icon="/sosial.jpeg" 
                            className="mt-6"
                        />
      </div> 
     
      
</div>

 
</div>
          

      
      
  
 </>);
}
  