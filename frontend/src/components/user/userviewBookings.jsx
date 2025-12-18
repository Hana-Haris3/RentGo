import React, { useState } from "react";
import { Container, Table, Button, Form, Row, Col, Badge } from "react-bootstrap";
import "../../../css/user/userbookings.css";
import { useParams } from "react-router";

const bookingsData = [
  { id: 1, car: "Toyota Corolla", price: 20, pickup: "04/17/23 at 8:25 PM", drop: "04/17/23 at 8:25 PM", status: "Booked" },
  { id: 2, car: "Honda Civic", price: 20, pickup: "04/17/23 at 8:25 PM", drop: "04/17/23 at 8:25 PM", status: "Booked" },
  { id: 3, car: "Hyundai Elantra", price: 20, pickup: "04/17/23 at 8:25 PM", drop: "04/17/23 at 8:25 PM", status: "Booked" },
  { id: 4, car: "Nissan Altima", price: 20, pickup: "04/17/23 at 8:25 PM", drop: "04/17/23 at 8:25 PM", status: "Booked" },
  { id: 5, car: "Hyundai i20", price: 20, pickup: "04/17/23 at 8:25 PM", drop: "04/17/23 at 8:25 PM", status: "Booked" }
];

export default function UserViewBookings()  {
  const [search, setSearch] = useState("");

  //   const [userReview,setuserReview]=useState([])
  // const {id} = useParams()
  // const navigate = useNavigate()


  // useEffect(()=>{
  //     const getUserBookings = async()=> {
  //       try {
  //           const res = await fetch(`http://localhost:3000/admin/viewreviews/${id}`,
  //             {credentials: "include"}
  //           );
  //           const data = await res.json();
  //           const review = data.review
  //           setuserReview(review)
  //           if(!data.success){
  //             alert("something went wrong!!!")
  //           }
  //           // else{
  //           //   alert("something went wrong!!!")
  //           // }
  //       } catch (error) {
  //           console.log(error)
  //       } 
  //     }
  //     getUserBookings()
  //   },[])

  const filteredData = bookingsData.filter(
    (b) =>
      b.car.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toString().includes(search)
  );

  return (
    <Container fluid className="booking-wrapper py-4">
    
      <Row className="align-items-center mb-3 g-2">
        <Col xs={12} md={9}>
          <Form.Control
            placeholder="Search for id, name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col xs={12} md={3}>
          <Button className="w-100 search-btn">Search</Button>
        </Col>
      </Row>
      <div className="table-responsive">
        <Table bordered hover className="booking-table text-center align-middle">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Car</th>
              <th>Price</th>
              <th>Pick Up Date</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.car}</td>
                <td>${item.price}.00</td>
                <td>{item.pickup}</td>
                <td>{item.drop}</td>
                <td>
                  <Badge bg="success" className="status-badge">
                    {item.status}
                  </Badge>
                </td>
                <td>
                  <Button size="sm" className="cancel-btn">
                    Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};