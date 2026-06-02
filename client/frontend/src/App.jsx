import React from "react";
import { Routes, Route } from "react-router-dom";

// Common
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import ProtectedRoute from "./Components/Common/ProtectedRoute";

// Auth
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import ForgetPassword from "./Components/auth/ForgetPassword";
import ResetPassword from "./Components/auth/Resetpassword";

// Pages
import Home from "./Components/Pages/Home";
import SearchBuses from "./Components/Pages/SearchBuses";
import BusDetailsPage from "./Components/Pages/BusDetailsPage";
import SeatSelection from "./Components/Pages/SeatSelection";
import Checkout from "./Components/Pages/Checkout";
import Profile from "./Components/Pages/Profile";
import MyBookings from "./Components/Pages/MyBooking";
import TicketPage from "./Components/Pages/TicketPage";
import NotFound from "./Components/Pages/NotFound";

// Booking
import BookingSummary from "./Components/Booking/BookingSummary";
import PassengerForm from "./Components/Booking/passengerForm";
import TicketCard from "./Components/Booking/TicketCard";
import BookingHistory from "./Components/Booking/BookingHistrory";

// Payment
import PaymentForm from "./Components/Payment/PaymentForm";
import PaymentSuccess from "./Components/Payment/PaymentSuccess";
import PaymentFailed from "./Components/Payment/PaymentFailed";

// Admin Pages
import Dashboard from "./Components/Pages/admin/Dashboard";
import ManageBuses from "./Components/Pages/admin/ManageBuses";
import ManageBookings from "./Components/Pages/admin/ManageBookings";
import Users from "./Components/Pages/admin/Users";
import Reports from "./Components/Pages/admin/Reports";

// Admin Components
import DashboardStats from "./Components/Admin/DashboardStats";
import AddBusForm from "./Components/Admin/AdminBusForm";
import EditBusForm from "./Components/Admin/EditBusForm";
import BusTable from "./Components/Admin/BusTable";
import BookingTable from "./Components/Admin/BookingTable";

const App = () => {
  const isLoggedIn = true; // Later replace with auth state

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        user={{ name: "Prince" }}
        onLogout={() => console.log("Logout")}
      />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route path="/search-buses" element={<SearchBuses />} />
        <Route path="/bus/:id" element={<BusDetailsPage />} />

        {/* Protected User Routes */}
        <Route
          path="/seat-selection/:busId"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SeatSelection />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MyBookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ticket/:bookingId"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <TicketPage />
            </ProtectedRoute>
          }
        />

        {/* Booking Routes */}
        <Route
          path="/passenger-form"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PassengerForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/booking-summary"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <BookingSummary />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ticket-card"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <TicketCard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/booking-history"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <BookingHistory />
            </ProtectedRoute>
          }
        />

        {/* Payment Routes */}
        <Route
          path="/payment"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PaymentForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment-success"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PaymentSuccess />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment-failed"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PaymentFailed />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/dashboard-stats"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <DashboardStats />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/manage-buses"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ManageBuses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/manage-bookings"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ManageBookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Reports />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-bus"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <AddBusForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-bus/:id"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <EditBusForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/buses"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <BusTable />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <BookingTable />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
