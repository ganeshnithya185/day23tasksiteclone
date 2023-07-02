import React from "react";

function Carditem({ data = {},cartItems,setCartItems}) {
  const handleClick =()=>{
    if(cartItems.find((item)=>item.title === data.title)){
      setCartItems((prevItem)=>prevItem.filter((item)=>item.title !== data.title));
   
    }else{
      setCartItems((prevItem)=>[...prevItem, data]);
     
    }
  }
 
  return (
    <div>
      <div className="col mb-5">
        <div className="card h-100">
          <img
            className="card-img-top"
            src={data.imageUrl}
            alt="..."
            style={{ objectFit: "cover", height: "200px", width: "205px" }}
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{data.title}</h5>
              {data.price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                onClick={handleClick}
                className="btn btn-outline-dark mt-auto"
              >
                {" "}
                {cartItems.find((item) => item.title === data.title)
                  ? "Remove from cart"
                  : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carditem;

