import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { AddProducts } from "../Redux/Actions/action";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Adding the product to the DB
  const handleAddProduct = (e) => {
    e.preventDefault();
    const {
      formBasicId,
      formBasicTitle,
      formBasicPrice,
      formBasicDescription,
      formBasicRating,
      formBasicQty,
      formBasicImage,
    } = e.target;
    const item = {
      id: formBasicId.value,
      title: formBasicTitle.value,
      description: formBasicDescription.value,
      price: formBasicPrice.value,
      rating: formBasicRating.value,
      qty: formBasicQty.value,
      image: formBasicImage.value,
    };
    dispatch(AddProducts(item));
    alert("Product Added Successfully");
    navigate("/EcomerceRedux");
  };
  return (
    <div className="container mr-3 ml-3 mt-4">
      <Form onSubmit={handleAddProduct}>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="text" placeholder="Rating" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>ImageLink</Form.Label>
          <Form.Control type="text" placeholder="Link" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicQty">
          <Form.Label>Qty</Form.Label>
          <Form.Control type="text" placeholder="Quantity" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddProduct;
