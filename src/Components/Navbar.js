import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useSelector } from "react-redux";
function TextLinkExample() {
  const getData = useSelector((state)=>state.cartReducer)
  return (
    <Navbar  bg="dark">
      <Container fluid>
        <Navbar.Brand ><Link to = "/EcomerceRedux"style={{textDecoration:"none", color: 'white'}}>Shopping Cart</Link></Navbar.Brand>
        <Navbar.Brand><Link to = "/AddProduct" style={{textDecoration:"none", color: 'white'}}>Add Product <AddCircleOutlineIcon/></Link></Navbar.Brand>
        <Navbar.Toggle />
        <Badge badgeContent={getData.carts.length} color="primary">
            <Link to = "/Cart" style={{textDecoration:"none", color: 'white'}}><AddShoppingCartIcon /></Link>
        </Badge>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;