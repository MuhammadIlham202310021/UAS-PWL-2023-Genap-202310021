import React, { useEffect, useState } from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

export default function MenuDrink() {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/foods/categoryId/4"
      );
      setFood(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //get parameter from outlet
  const [mychart, handlerAdd2Chart] = useOutletContext();

  return (
    <div id="Menu-Drink">
      <div className="container">
        <div className="judul-menu">
          <h1>Drink</h1>
        </div>
        <div className="detail-menu">
          <Row>
            {food.map((v) => {
              return (
                <Col md={5} className="mb-3 me-5">
                  <Card style={{ width: "21rem" }}>
                    <div className="img">
                      <Image
                        src={`${v.image}`}
                        alt="logo-food"
                        className="w-100 image-food"
                      />
                    </div>
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-7 ">
                          <p className="nama-makanan">
                            <div
                              style={{
                                cursor: "pointer",
                                marginBottom: 10,
                                fontSize: 30,
                              }}
                              onClick={() => handlerAdd2Chart(v)}
                            >
                              <span>{v.name}</span>
                            </div>
                          </p>
                        </div>
                        <div className="col-md-5 text-end harga">
                          <button className="btn" type="button">
                            Rp.{v.price}
                          </button>
                        </div>
                      </div>
                      <p className="deskripsi">{v.desc}</p>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}
