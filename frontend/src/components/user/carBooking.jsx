import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../css/user/carBooking.css";

const CarBooking = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  const [pickupTime, setPickupTime] = useState({
    hour: "",
    minute: "",
    period: "AM",
  });

  const [dropTime, setDropTime] = useState({
    hour: "",
    minute: "",
    period: "AM",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="booking-page container py-4">

      <div className="card car-card p-3 shadow-sm mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-7">
            <img
              src="/assets/car.png"
              alt="Car"
              className="img-fluid rounded car-image"
            />
          </div>

          <div className="col-md-5">
            <h5 className="mb-1">Mercedes</h5>
            <p className="text-muted mb-1">Sedan</p>
            <p className="car-price">
              $25 <span className="text-muted">per day</span>
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Pick Up Date</label>
          <input
            type="date"
            className="form-control"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Drop Date</label>
          <input
            type="date"
            className="form-control"
            value={dropDate}
            onChange={(e) => setDropDate(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-4">

        <div className="col-md-6">
          <p className="fw-semibold">Pick Up Time</p>

          <div className="time-box p-3 rounded">
            <div className="d-flex align-items-center justify-content-between">

              <input
                type="number"
                placeholder="HH"
                className="form-control time-input"
                value={pickupTime.hour}
                onChange={(e) =>
                  setPickupTime({ ...pickupTime, hour: e.target.value })
                }
              />

              <span className="time-colon">:</span>

              <input
                type="number"
                placeholder="MM"
                className="form-control time-input"
                value={pickupTime.minute}
                onChange={(e) =>
                  setPickupTime({ ...pickupTime, minute: e.target.value })
                }
              />

              <select
                className="form-select period-select"
                value={pickupTime.period}
                onChange={(e) =>
                  setPickupTime({ ...pickupTime, period: e.target.value })
                }
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>

            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-light btn-sm">Cancel</button>
              <button className="btn btn-dark btn-sm">OK</button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <p className="fw-semibold">Drop Time</p>

          <div className="time-box p-3 rounded">
            <div className="d-flex align-items-center justify-content-between">

              <input
                type="number"
                placeholder="HH"
                className="form-control time-input"
                value={dropTime.hour}
                onChange={(e) =>
                  setDropTime({ ...dropTime, hour: e.target.value })
                }
              />

              <span className="time-colon">:</span>

              <input
                type="number"
                placeholder="MM"
                className="form-control time-input"
                value={dropTime.minute}
                onChange={(e) =>
                  setDropTime({ ...dropTime, minute: e.target.value })
                }
              />

              <select
                className="form-select period-select"
                value={dropTime.period}
                onChange={(e) =>
                  setDropTime({ ...dropTime, period: e.target.value })
                }
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>

            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-light btn-sm">Cancel</button>
              <button className="btn btn-dark btn-sm">OK</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-4 summary-card">
        <h5 className="mb-3">Order Summary</h5>

        <p>Total Time:</p>
        <p>Total Days:</p>
        <p>Price:</p>

        <div className="d-flex justify-content-between align-items-center mt-4">
          
          {/* PAY DROPDOWN */}
          <div className="dropdown">
            <button
              className="btn btn-success dropdown-toggle px-4"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pay
            </button>

            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setPaymentMethod("Cash")}
                >
                  Cash
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setPaymentMethod("UPI")}
                >
                  UPI
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setPaymentMethod("Card")}
                >
                  Card
                </button>
              </li>
            </ul>
          </div>

          <button className="btn confirm-btn px-4">Confirm</button>
        </div>

        {paymentMethod && (
          <p className="mt-3 text-success">
            Payment Method: <strong>{paymentMethod}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default CarBooking;



// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../../../css/user/carBooking.css";

// const CarBooking = () => {
//   const [pickupDate, setPickupDate] = useState("");
//   const [dropDate, setDropDate] = useState("");

//   const [pickupTime, setPickupTime] = useState({
//     hour: "",
//     minute: "",
//     period: "AM",
//   });

//   const [dropTime, setDropTime] = useState({
//     hour: "",
//     minute: "",
//     period: "AM",
//   });

//   const [paymentMethod, setPaymentMethod] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = {
//       pickupDate,
//       dropDate,
//       pickupTime,
//       dropTime,
//       paymentMethod,
//     };

//     console.log("Form Data:", formData);

//     // 👉 send to backend using fetch / axios here
//   };

//   return (
//     <div className="booking-page container py-4">

//       {/* 🔽 FORM START */}
//       <form method="post" onSubmit={handleSubmit}>

//         {/* CAR CARD */}
//         <div className="card car-card p-3 shadow-sm mb-4">
//           <div className="row g-3 align-items-center">
//             <div className="col-md-7">
//               <img
//                 src="/assets/car.png"
//                 alt="Car"
//                 className="img-fluid rounded car-image"
//               />
//             </div>

//             <div className="col-md-5">
//               <h5 className="mb-1">Mercedes</h5>
//               <p className="text-muted mb-1">Sedan</p>
//               <p className="car-price">
//                 $25 <span className="text-muted">per day</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* DATES */}
//         <div className="row mb-4">
//           <div className="col-md-6 mb-3">
//             <label className="form-label fw-semibold">Pick Up Date</label>
//             <input
//               type="date"
//               name="pickupDate"
//               className="form-control"
//               value={pickupDate}
//               onChange={(e) => setPickupDate(e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mb-3">
//             <label className="form-label fw-semibold">Drop Date</label>
//             <input
//               type="date"
//               name="dropDate"
//               className="form-control"
//               value={dropDate}
//               onChange={(e) => setDropDate(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* PICKUP TIME */}
//         <div className="row mb-4">
//           <div className="col-md-6">
//             <p className="fw-semibold">Pick Up Time</p>

//             <div className="time-box p-3 rounded">
//               <div className="d-flex align-items-center justify-content-between">

//                 <input
//                   type="number"
//                   name="pickupHour"
//                   placeholder="HH"
//                   className="form-control time-input"
//                   value={pickupTime.hour}
//                   onChange={(e) =>
//                     setPickupTime({ ...pickupTime, hour: e.target.value })
//                   }
//                 />

//                 <span className="time-colon">:</span>

//                 <input
//                   type="number"
//                   name="pickupMinute"
//                   placeholder="MM"
//                   className="form-control time-input"
//                   value={pickupTime.minute}
//                   onChange={(e) =>
//                     setPickupTime({ ...pickupTime, minute: e.target.value })
//                   }
//                 />

//                 <select
//                   name="pickupPeriod"
//                   className="form-select period-select"
//                   value={pickupTime.period}
//                   onChange={(e) =>
//                     setPickupTime({ ...pickupTime, period: e.target.value })
//                   }
//                 >
//                   <option>AM</option>
//                   <option>PM</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* DROP TIME */}
//           <div className="col-md-6">
//             <p className="fw-semibold">Drop Time</p>

//             <div className="time-box p-3 rounded">
//               <div className="d-flex align-items-center justify-content-between">

//                 <input
//                   type="number"
//                   name="dropHour"
//                   placeholder="HH"
//                   className="form-control time-input"
//                   value={dropTime.hour}
//                   onChange={(e) =>
//                     setDropTime({ ...dropTime, hour: e.target.value })
//                   }
//                 />

//                 <span className="time-colon">:</span>

//                 <input
//                   type="number"
//                   name="dropMinute"
//                   placeholder="MM"
//                   className="form-control time-input"
//                   value={dropTime.minute}
//                   onChange={(e) =>
//                     setDropTime({ ...dropTime, minute: e.target.value })
//                   }
//                 />

//                 <select
//                   name="dropPeriod"
//                   className="form-select period-select"
//                   value={dropTime.period}
//                   onChange={(e) =>
//                     setDropTime({ ...dropTime, period: e.target.value })
//                   }
//                 >
//                   <option>AM</option>
//                   <option>PM</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* SUMMARY */}
//         <div className="card shadow-sm p-4 summary-card">
//           <h5 className="mb-3">Order Summary</h5>

//           <p>Total Time:</p>
//           <p>Total Days:</p>
//           <p>Price:</p>

//           <div className="d-flex justify-content-between align-items-center mt-4">

//             {/* PAYMENT */}
//             <div className="dropdown">
//               <button
//                 className="btn btn-success dropdown-toggle px-4"
//                 type="button"
//                 data-bs-toggle="dropdown"
//               >
//                 Pay
//               </button>

//               <ul className="dropdown-menu">
//                 {["Cash", "UPI", "Card"].map((method) => (
//                   <li key={method}>
//                     <button
//                       type="button"
//                       className="dropdown-item"
//                       onClick={() => setPaymentMethod(method)}
//                     >
//                       {method}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* ✅ SUBMIT BUTTON */}
//             <button type="submit" className="btn confirm-btn px-4">
//               Confirm
//             </button>
//           </div>

//           {paymentMethod && (
//             <p className="mt-3 text-success">
//               Payment Method: <strong>{paymentMethod}</strong>
//             </p>
//           )}

//           {/* hidden input for payment */}
//           <input type="hidden" name="paymentMethod" value={paymentMethod} />
//         </div>

//       </form>
//       {/* 🔼 FORM END */}
//     </div>
//   );
// };

// export default CarBooking;

