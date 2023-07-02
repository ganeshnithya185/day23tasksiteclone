import React from "react";
function Header() {
    const headerStyle = {
      backgroundImage:
        "url(https://img.freepik.com/free-photo/fruit-platter-with-mixed-sliced-fruits_114579-3028.jpg?size=626&ext=jpg&ga=GA1.1.1071463004.1682097568&semt=ais)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div>
        <header className="bg-dark py-5" style={headerStyle}>
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Fresh Fruits</h1>
              
            </div>
          </div>
        </header>
      </div>
    );
}
export default Header;
