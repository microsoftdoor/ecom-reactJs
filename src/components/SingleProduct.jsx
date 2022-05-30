import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import "../styles.css"

const SingleProduct = ({prod}) => {

    const {state : { cart }, dispatch} = CartState()

    return ( 
        <div className="products">
            <Card>
                <Card.Img variant="top" src={prod.image} alt={prod.alt}/>
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle>
                        <span>$ {prod.price.split(".")[0]}</span>
                        <div>
                            {prod.fastDelivery 
                            ? (<span>Fast Delivery</span>)
                            : (<span>4 Day Delivery</span>)}
                        </div>
                    </Card.Subtitle>
                    {cart.some(p=> p.id === prod.id)
                    ?   <Button onClick={()=> dispatch({type: "REMOVE_FROM_CART", payload: prod} )} variant="danger">
                            Remove from cart
                        </Button>
                    :   <Button onClick={()=> dispatch({type: "ADD_TO_CART", payload: prod})} disabled={!prod.inStock}>
                            {prod.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                    }
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default SingleProduct;