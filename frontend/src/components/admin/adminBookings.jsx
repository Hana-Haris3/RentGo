import React, { useState } from "react";
import { Link } from "react-router";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import "../../../css/admin/adminBookings.css";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customer: "Michael",
      car: "Toyota Corolla",
      price: "$20.00",
      pickup: "04/17/23 at 8:25 PM",
      returnDate: "04/17/23 at 8:25 PM",
      status: true, 
    },
    {
      id: 2,
      customer: "Anna",
      car: "Honda Civic",
      price: "$20.00",
      pickup: "04/17/23 at 8:25 PM",
      returnDate: "04/17/23 at 8:25 PM",
      status: true,
    },
    {
      id: 3,
      customer: "Thomas",
      car: "Hyundai Elantra",
      price: "$20.00",
      pickup: "04/17/23 at 8:25 PM",
      returnDate: "04/17/23 at 8:25 PM",
      status: true,
    },
    {
      id: 4,
      customer: "Michelle",
      car: "Nissan Altima",
      price: "$20.00",
      pickup: "04/17/23 at 8:25 PM",
      returnDate: "04/17/23 at 8:25 PM",
      status: true,
    },
    {
      id: 5,
      customer: "Andrea",
      car: "Hyundai i20",
      price: "$20.00",
      pickup: "04/17/23 at 8:25 PM",
      returnDate: "04/17/23 at 8:25 PM",
      status: true,
    },
    {
      id: 6,
      customer: "Philip",
      car: "Ford Figo",
      price: "$20.00",
      pickup: "04/17/23 at 8:25 PM",
      returnDate: "04/17/23 at 8:25 PM",
      status: true,
    },
  ]);

  const handleStatusClick = (index) => {
    if (bookings[index].status === true) {
      alert("cancel current booking?");

      const updatedBookings = [...bookings];
      updatedBookings[index].status = false;
      setBookings(updatedBookings);
    }
  };

  return (
    <div className="booking-page">
      <Container fluid>

        {/* SEARCH & FILTER */}
        <Row className="search-row align-items-center">
          <Col md={8}>
            <Form.Control
              className="search-input"
              placeholder="Search for id, name product"
            />
          </Col>

          <Col md={4} className="search-actions">
            <Button className="search-btn">Search</Button>

            <Form.Select className="filter-dropdown">
              <option>Filter</option>
              <option value="car">Car Name</option>
              <option value="pickup">PickUp Date</option>
              <option value="return">Return Date</option>
              <option value="booked">Booked</option>
              <option value="cancelled">Cancelled</option>
            </Form.Select>
          </Col>
        </Row>

        {/* BOOKINGS TABLE */}
        <div className="table-wrapper">
          <Table bordered responsive className="booking-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Car</th>
                <th>Price</th>
                <th>PickUp Date</th>
                <th>Return Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody id="table-background">
              {bookings.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.customer}</td>
                  <td>{item.car}</td>
                  <td>{item.price}</td>
                  <td>{item.pickup}</td>
                  <td>{item.returnDate}</td>

                  {/* STATUS */}
                  <td>
                    <Button
                      className={
                        item.status ? "status-booked" : "status-cancelled"
                      }
                      onClick={() => handleStatusClick(index)}
                    >
                      {item.status ? "Booked" : "Cancelled"}
                    </Button>
                  </td>

                  {/* ACTION */}
                  <td>
                    <Button className="view-btn"  as={Link} to="/admin/viewbooking">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

      </Container>
    </div>
  );
};

export default AdminBookings;
