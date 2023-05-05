import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DLT } from "../Redux/Actions/action";
function Cart() {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.cartReducer);

  //For Deleting a Item from the Cart
  const deletecartItem = (id) => {
    dispatch(DLT(id));
  };
  if (getData) {
    return (
      <div className="container  mt-3">
        <div className="row d-flex justify-content-left align-items-center">
          {getData.carts.map((value, id) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none", cursor: "pointer" }}
                  className="mx-2 mt-4 card_style"
                >
                  <Link to={`/ProductDetail/${value.id}`}>
                    <Card.Img
                      variant="top"
                      src={value.image}
                      style={{ height: "16rem" }}
                      className="mt-3"
                    />
                  </Link>

                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>
                      <b>Price: </b>₹{value.price}
                    </Card.Text>
                    <Card.Text>
                      <b>Quantity:</b>
                      {value.qty}
                    </Card.Text>
                    <div className="d-flex justify-content-center ">
                      <Button
                        variant="primary"
                        className="col-lg-9"
                        style={{ backgroundColor: "red" }}
                        onClick={() => deletecartItem(value.id)}
                      >
                        Remove from Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Cart;
