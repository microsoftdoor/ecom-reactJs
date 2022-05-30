import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import "../styles.css"
import Rating from "./Rating";

const Filters = () => {

    const {productState:{byStock, byFastDelivery, byRating ,sort}, productDispatch} = CartState()

    return ( 
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Price(low to high)"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={()=>productDispatch({
                        type:"SORT_BY_PRICE",
                        payload: "lowToHigh"
                    })}
                    checked={(sort==="lowToHigh") ? true: false} //I Think we will do something with this later
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Price(high to low)"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={()=>productDispatch({
                        type:"SORT_BY_PRICE",
                        payload: "highToLow"
                    })}
                    checked={(sort==="highToLow") ? true: false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={()=> productDispatch({
                        type: "FILTER_BY_STOCK"
                    })}
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={()=> productDispatch({
                        type: "FILTER_BY_DELIVERY"
                    })}
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{paddingRight: 20}}>Rating:</label>
                <Rating  rating={byRating} 
                        style={{padding: 3, 
                        cursor: "pointer"}} 
                        onClick={i => productDispatch({
                            type: "FILTER_BY_RATING",
                            payload: i + 1
                        })}/>
            </span>

            <Button variant="light" onClick={()=>productDispatch({type: "CLEAR_FILTERS"})}>Clear Filters</Button>
        </div>
     );
}
 
export default Filters;