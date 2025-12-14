import React from "react";
import "../../../css/admin/adminhome.css";
import { useNavigate } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  FaClipboardList,
  FaCarAlt,
  FaTools,
} from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { useEffect } from "react";

const AdminHome = () => {
  const navigate = useNavigate()

  useEffect(() => {
      try {
        fetch('http://localhost:3000/admin')
          .then((res)=>res.json())
          .then((data)=>{
            if(!data.authentication){
              navigate('/login/admin')
            }
          })
      }
      catch(error){
        console.log(error)
      }
  }, [])



  const barData = [
    { day: "Sun", rent: 60, revenue: 80 },
    { day: "Mon", rent: 40, revenue: 70 },
    { day: "Tue", rent: 50, revenue: 60 },
    { day: "Wed", rent: 30, revenue: 50 },
    { day: "Thu", rent: 60, revenue: 90 },
    { day: "Fri", rent: 20, revenue: 40 },
    { day: "Sat", rent: 60, revenue: 60 },
  ];

  const pieData = [
    { name: "Total Rent", value: 81, color: "#E74C3C" },
    { name: "Customer Growth", value: 22, color: "#2ECC71" },
    { name: "Total Revenue", value: 62, color: "#3498DB" },
  ];

  return (
    <div className="container-fluid p-4 dashboard-bg">

      {/* === STAT CARDS === */}
      <div className="row g-4 mb-5">

        <div className="col-md-3">
          <StatCard
            title="Total Orders"
            value="75"
            gradient="bg-gradient-to-br from-green-900 to-green-400"
            icon={<FaClipboardList size={45} />}
          />
        </div>

        <div className="col-md-3">
          <StatCard
            title="Total Cars"
            value="75"
            gradient="bg-gradient-to-br from-yellow-900 to-yellow-500"
            icon={<FaCarAlt size={45} />}
          />
        </div>

        <div className="col-md-3">
          <StatCard
            title="Available Cars"
            value="75"
            gradient="bg-gradient-to-br from-green-950 to-green-600"
            icon={<IoCarSportSharp size={45} />}
          />
        </div>

        <div className="col-md-3">
          <StatCard
            title="In Maintenance"
            value="75"
            gradient="bg-gradient-to-br from-yellow-900 to-yellow-600"
            icon={<FaTools size={45} />}
          />
        </div>

      </div>

      {/* === CHART ROW === */}
      <div className="row g-4">

        {/* BAR CHART */}
        <div className="col-md-6">
          <div className="chart-box">
            <div className="d-flex justify-content-between mb-3">
              <h5 className="chart-title">Total Revenue</h5>
              <button className="btn btn-outline-secondary btn-sm">Weekly</button>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="day" />
                <Tooltip />
                <Bar dataKey="rent" fill="#E74C3C" />
                <Bar dataKey="revenue" fill="#F1C40F" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE CHARTS */}
        <div className="col-md-6">
        <div className="chart-box">
            <h5 className="chart-title mb-4">Pie Chart</h5>

            <div className="row text-center">
            {pieData.map((item, index) => (
                <div key={index} className="col-4 d-flex flex-column align-items-center">

                <PieChart width={120} height={120}>
                    <Pie
                    data={[item]}
                    cx={60}
                    cy={60}
                    startAngle={90}
                    endAngle={-270}
                    innerRadius={30}
                    outerRadius={50}
                    paddingAngle={5}
                    dataKey="value"
                    >
                    <Cell fill={item.color} />
                    </Pie>
                </PieChart>

                <p className="pie-text-value mt-2">{item.value}%</p>
                <p className="pie-text-label">{item.name}</p>

                </div>
            ))}
            </div>

        </div>
        </div>

      </div>

    </div>
  );
};

/* === STAT CARD COMPONENT === */
const StatCard = ({ title, value, gradient, icon }) => {
  return (
    <div className={`stat-card ${gradient}`}>
      <div>
        <h6 className="stat-card-title">{title}</h6>
        <p className="stat-card-value">{value}</p>
      </div>

      <div className="stat-card-icon">
        {icon}
      </div>
    </div>
  );
};

export default AdminHome;
