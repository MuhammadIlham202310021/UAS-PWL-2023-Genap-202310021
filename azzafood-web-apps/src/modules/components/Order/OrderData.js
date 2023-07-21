import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "./Cart";
import { Card } from "react-bootstrap";
import { openModal } from "../../../layouts/components/modals/Modals";

export default function OrderData({ mychart }) {
  const [postData, setPostData] = useState({
    items: [],
    // nameFood: "",
    // price: "",
    tableNumber: "",
    notes: "",
    totalPayment: "",
    typePayment: "",
  });

  const handleOrderNow = async (e) => {
    e.preventDefault();
    if (postData.tableNumber !== "" && postData.typePayment !== "") {
      // resetForm();
      openModal({ header: "Preview", message: <NotaOrder /> });
    } else {
      alert("isi nomor meja dan pilih metode pembayaran terlebih dahulu.");
    }
  };

  // const removeItem = (index) => {
  //   const updatedChart = [...mychart];
  //   updatedChart.splice(index, 1);
  //   setPostData({
  //     ...postData,
  //     items: updatedChart.map((item) => ({
  //       nameFood: item.name,
  //       price: item.price,
  //     })),
  //   });
  // };

  const handleRemoveItem = (index) => {
    const updatedChart = [...mychart];
    updatedChart.splice(index, 1);
    setPostData({ ...postData, items: updatedChart });
  };

  const NotaOrder = () => {
    var totalpay = mychart.reduce((a, v) => (a = a + v.price), 0);
    setPostData({ ...postData, totalPayment: totalpay, items: mychart });

    setPostData({
      ...postData,
      totalPayment: totalpay,
      items: mychart.map((item) => ({
        nameFood: item.name,
        price: item.price,
      })),
    });

    // Tampilan isi modals
    return (
      <div className="list-group list-group-flush isi-modals">
        <div className="list-group-item modal-pesanan">
          <p>Daftar pesanan</p>
          <Cart mychart={mychart} />
        </div>
        <div className="list-group-item modal-catatan">
          {/* <p>Total bayar : {totalpay}</p> */}
          <p>Nomor Meja : {postData.tableNumber}</p>
          <p>Catatan : {postData.notes}</p>
        </div>
        <div className="list-group-item modal-pembayaran">
          <p>Pembayaran via</p>
          {postData.typePayment === "cash" ? (
            <p>Cash</p>
          ) : (
            <p>Virtual Account: 3901089611312484</p>
          )}
          <p>Silahkan Melakukan pembayaran </p>
        </div>
        <button
          type="button"
          onClick={() => handleSubmit()}
          disabled={mychart.length === 0}
        >
          Order
        </button>
      </div>
    );
  };

  const handleSubmit = async () => {
    console.log(postData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders",
        postData
      );
      alert("berhasil");
    } catch (error) {
      console.error(error);
    }
  };

  // Tampilan Form Order
  return (
    <div id="order" className="mt-5">
      <Card>
        <div className="container">
          <div className="titleorder pt-3">
            <h1>Order</h1>
          </div>
          <div className="food-order mt-4">
            <form
              className="row d-block detail-order"
              method="post"
              autoComplete="off"
              id="form-order"
              onSubmit={(e) => handleOrderNow(e)}
              // onSubmit={handleOrderNow}
            >
              <div className="col d-block detail-food">
                <div className="detail-nama">
                  <p>Menu Pesanan</p>
                  <div >
                    <Cart
                      mychart={mychart}
                      handleRemoveItem={handleRemoveItem}
                    />
                  </div>
                </div>
              </div>

              <div className="col mt-4 mb-4 detail-table">
                <div className="d-block no-meja mb-3 mt-3">
                  <label className="form-label">Nomor Meja : </label>
                  <div className="input-group">
                    <span className="input-group-text">No</span>
                    <input
                      type="text"
                      name="table-meja"
                      className="form-control"
                      title="Nomor meja harus berupa dua digit angka"
                      value={postData.tableNumber}
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          tableNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="catatan mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Catatan Pesanan :
                  </label>
                  <textarea
                    name="desc"
                    className="form-control"
                    defaultValue={postData.notes}
                    onChange={(e) =>
                      setPostData({ ...postData, notes: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>

              <div className="col detail-bayar pt-3">
                <p>Metode Pembayaran</p>
                <div className="payment-method me-3 pe-4">
                  <label className="pe-3">
                    <input
                      type="radio"
                      className="paymentMethod pe-3"
                      value="cash"
                      checked={postData.typePayment === "cash"}
                      onChange={() =>
                        setPostData({ ...postData, typePayment: "cash" })
                      }
                    />
                    Cash
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="virtual account"
                      checked={postData.typePayment === "virtual account"}
                      onChange={() =>
                        setPostData({
                          ...postData,
                          typePayment: "virtual account",
                        })
                      }
                    />
                    Virtual Account
                  </label>
                </div>

                <div className="tombol-submit mb-4 mt-4">
                  <button
                    type="submit"
                    className="btn"
                    disabled={mychart.length === 0}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}
