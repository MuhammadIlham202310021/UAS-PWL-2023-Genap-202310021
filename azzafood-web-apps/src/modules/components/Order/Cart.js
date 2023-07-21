import React from "react";

const Cart = ({ mychart, handleRemoveItem }) => {
  var totalpay = mychart.reduce((a, v) => (a = a + v.price), 0);

  // const handleDelete = (index) => {
  //   onDeleteItem(index);
  // };

  return (
    <div className="cart">
      {Object.values(mychart).length > 0 ? (
        <div className="mychart">
          <ol className="scroll-cart">
            {Object.values(mychart).map((v, index) => (
              <li key={index}>
                <span>
                  {v.name} Rp {v.price}
                </span>
                {/* <button
                  onClick={() => handleRemoveItem(index)}
                  // className="remove-button"
                >
                  Hapus
                </button> */}
              </li>
            ))}
          </ol>
          <p>Total bayar: Rp {totalpay}</p>
        </div>
      ) : (
        <h1>*Anda belum memilih makanan</h1>
      )}
    </div>
  );
};

export default Cart;
