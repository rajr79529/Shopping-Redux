import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import {
  Add,
  ShowProduct,
  DeleteProduct,
  APIShowProduct,
  EditProducts,
} from "../Redux/Actions/action";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import LoadComponent from "./LoadComponent";

function Home() {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.cartReducer.products);
  const productLoader = useSelector((state) => state.cartReducer.productLoader);
  const loader = useSelector((state) => state.cartReducer.loading);
  const [filterMode, setFilterMode] = useState(false);
  const [title, setTitle] = useState("");
  const [idToBeEdited, setIdToBeEdited] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");


  //API calling to Render Data from Server
  useEffect(() => {
    if (!productLoader) {
      dispatch(APIShowProduct());
    }
  }, []);
  const handleEdit = (data) => {
    setIdToBeEdited(data.id);
    setTitle(data.title);
    setPrice(data.price);
    setQty(data.qty);
  };
//Function for Adding a Item to Cart
  const send = (e) => {
    dispatch(Add(e));
  };

  //This function is for Deleting a Product
  const handleDelete = (id) => {
    dispatch(DeleteProduct(id));

    NotificationManager.success("Product Deletd Successfully");
  };

  //This is fucntion to handle filter by Price
  const handleFilter = () => {
    setFilterMode(true);
    const newData = getData.sort((a, b) => a.price - b.price);
    dispatch(ShowProduct(newData));
  };

//Handling to Remove the filter of Price
  const handleClose = () => {
    setFilterMode(false);
    dispatch(APIShowProduct());
  };

  //function for editing the product
  const handleEditSave = (data) => {
    const item = {
      id: data.id,
      title: title,
      description: data.description,
      price: price,
      rating: data.rating,
      qty: qty,
      image: data.image,
    };
    dispatch(EditProducts(item));
    setIdToBeEdited("");
    NotificationManager.success("Product Edited Successfully");
   
  };

  //Cancel button function in case you don't want to Edit
  const handleEditCancel = () => {
    setIdToBeEdited("");
    setTitle("");
    setPrice("");
    setQty("");
  };

  if (loader) {
    return <LoadComponent />;
  }
  if (getData) {
    return (
      <div className="container  mt-3">
        <div
          className="d-flex  align-items-right"
          style={{ display: "flex", justifyContent: "right" }}
        >
          {filterMode ? (
            <>
              {" "}
              Sort By Price
              <CloseButton onClick={() => handleClose()} />
            </>
          ) : (
            <Button
              variant="primary"
              className="col-lg-2"
              onClick={() => {
                handleFilter();
              }}
            >
              Sort By Price
            </Button>
          )}
        </div>
        <div className="row d-flex justify-content-left align-items-center">
          {getData.map((value) => {
            return (
              <>
                <Card
                  key={value.id}
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
                  {idToBeEdited === value.id ? (
                    <Card.Body>
                      <label>
                        <b>Title: </b>
                      </label>
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />

                      <Card.Text>
                        <label>
                          <b>Price: </b>
                        </label>
                        <input
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </Card.Text>
                      <Card.Text>
                        <label>
                          <b>Quantity: </b>
                        </label>
                        <input
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        />
                      </Card.Text>
                      <div className="d-flex ">
                        <Button
                          variant="primary"
                          className="col-lg-6"
                          onClick={() => handleEditCancel()}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="primary"
                          className="col-lg-6"
                          onClick={() => handleEditSave(value)}
                        >
                          Save
                        </Button>
                      </div>
                    </Card.Body>
                  ) : (
                    <Card.Body>
                      {idToBeEdited === value.id ? (
                        <input
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      ) : (
                        <Card.Title>{value.title}</Card.Title>
                      )}

                      <Card.Text>
                        <b>Price: </b>₹{value.price}
                      </Card.Text>
                      <Card.Text>
                        <b>Quantity:</b>
                        {value.qty}
                      </Card.Text>
                      <div className="flex-container">
                        <Button
                          variant="primary"
                          className="col-lg-6"
                          onClick={() => send(value)}
                        >
                          Add to Cart
                        </Button>
                        <div className="">
                          <DeleteRounded
                            style={{ marginRight: "1rem", color: "red" }}
                            onClick={() => handleDelete(value.id)}
                          />
                          <EditIcon onClick={() => handleEdit(value)} />
                        </div>
                      </div>
                    </Card.Body>
                  )}
                </Card>
              </>
            );
          })}
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

export default Home;
