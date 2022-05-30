import { FaShoppingCart} from "react-icons/fa";
import { Container, Dropdown, FormControl, Navbar, NavbarBrand, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import {AiFillDelete} from "react-icons/ai"
import "../styles.css"



const Header = () => {

    const {state:{cart}, dispatch, productDispatch} = CartState()

    return ( 
        <Navbar bg="dark" variant="dark" style={{height: 80}}>
            <Container>

                <NavbarBrand>
                    <Link to="/">Home</Link>
                </NavbarBrand>

                <Navbar.Text className="search">
                    <FormControl 
                        type="text" 
                        placeholder="Search" 
                        style={{width:500}} 
                        className="m-auto"
                        onChange={e => productDispatch({
                            type: "FILTER_BY_RATING",
                            payload: e.target.value
                        })} />
                </Navbar.Text>

                <Dropdown className="dropdown" align={{ lg: 'end' }}>
                    <Dropdown.Toggle variant="success"  id="dropdown-basic">
                        <FaShoppingCart color="white" fontSize={25} style={{marginRight: 5}}/>
                        <span>{cart.length}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu  className="dropdown-menu" style={{minWidth: 370}}>
                        {!cart.length
                        ?   (<span style={{padding: 10}}>Cart is empty</span>)
                        :   (<>   
                                {cart.map(prod => (
                                        <span className="cartitem">
                                            <img src={prod.image} className="cartItemImg" alt={prod.name} />
                                            <div className="cartItemDetail">
                                                <span>{prod.name}</span>
                                                <span> {prod.price.split(".")[0]}</span>
                                            </div>
                                            <AiFillDelete fontSize="20px" onClick={()=> dispatch({type: "REMOVE_FROM_CART", payload: prod})} />
                                        </span>
                                ))}
                                <Link to="/cart">
                                    <Button style={{width:"95%", margin: "0 10px"}}>
                                        Go to Cart
                                    </Button>
                                </Link>
                            </>
                            )
                        }
                        
                    </Dropdown.Menu>
                </Dropdown>

            </Container>
        </Navbar>
     );
}
 
export default Header;