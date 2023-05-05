
export const Add = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};


export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};
export const ShowProduct = (items) => {
   
  return {
    type: "SHOW_PRODUCT",
    payload: items,
  };
};
export const AddProducts = (item) => {
  return {
    type: "ADD_PRODUCT",
    payload: item,
  };
};

export const EditProducts = (item) => {
  return {
    type: "EDIT_PRODUCT",
    payload: item,
  };
};
export const DeleteProduct = (id) => {
  return {
    type: "DLT_PRODUCT",
    payload: id,
  };
};

export const APIShowProduct = () => {
  return (dispatch) => {
    try {
      fetch(
        "https://my-json-server.typicode.com/arvindshokhanda/ecomerceData/products"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log("", data)
          dispatch(ShowProduct(data))
        });
    }catch(err){
        alert("internal server error")
    }
   
  };
};
