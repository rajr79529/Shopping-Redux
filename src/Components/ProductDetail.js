import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import "./style.css";
import { Add } from "../Redux/Actions/action";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function ProductDetail() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const id = useParams();
  const getData = useSelector((state) => state.cartReducer.products);
  console.log(getData);
  console.log(id);
  const compare = () => {
    if (getData) {
      let compareData = getData.filter((e) => {
        return e.id === id.id;
      });
      setData(compareData[0]);
    }
  };
  const send = (e) => {
    dispatch(Add(e));
  };
  useEffect(() => {
    compare();
  }, [id]);
  if (data) {
    return (
      <>
        <div
          className="container mt-2"
          style={{ boxShadow: "1px 2px 9px #F4AAB9" }}
        >
          <h2 className="text-center">ProductDetail Page</h2>

          <section className="container mt-3">
            <div className="itemsDetails">
              <div className="items_img">
                <img src={data.image} alt="Product" />
              </div>
              <div className="details">
                <Table>
                  <tr>
                    <td>
                      <p>
                        <strong>Title: </strong> {data.title}
                      </p>
                      <p>
                        <strong>Price: </strong>₹{data.price}
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Rating: </strong>{" "}
                        <span
                          style={{
                            backgroundColor: "green",
                            color: "#fff",
                            padding: "2px 4px",
                            borderRadius: "5px",
                          }}
                        >
                          {data.rating}★
                        </span>
                      </p>
                      <p>
                        <strong>Description: </strong>
                        {data.description}
                      </p>
                    </td>
                    <td></td>
                  </tr>
                  <tr></tr>
                </Table>
                <Button
                  variant="primary"
                  className="col-lg-12"
                  onClick={() => send(data)}
                  style={{
                    width: "500px",
                    marginTop: "50px",
                    marginLeft: "10px",
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default ProductDetail;
