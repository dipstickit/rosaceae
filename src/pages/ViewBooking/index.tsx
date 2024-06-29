import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCustomerId } from "../../store/customerSlice";
import bookingService from "../../api/booking.api";
import { RootState } from "../../store/store";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ViewBooking: React.FC = () => {
  const dispatch = useDispatch();
  const customerId = useSelector(
    (state: RootState) => state.customer.customerId
  );
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedCustomerId = localStorage.getItem("usersID");
    if (savedCustomerId) {
      dispatch(setCustomerId(Number(savedCustomerId)));
    } else {
      console.error("User ID not found in localStorage.");
    }
  }, [dispatch]);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true); // Start loading
      try {
        const response = await bookingService.getBookingById(customerId || 0);
        setBookings(response.data.content); // Assuming `response.data` is structured as { content: [] }
      } catch (error) {
        setError(error.message); // Set error state if fetch fails
      } finally {
        setLoading(false); // Finish loading, regardless of success or failure
      }
    };

    if (customerId !== null) {
      fetchBookings();
    }
  }, [customerId]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Booking Information
        </h1>
        {loading}
        {error && <div className="text-red-600 text-center my-4">{error}</div>}
        {!loading && !error && (
          <>
            {bookings && bookings.length > 0 ? (
              bookings.map((booking) => (
                <div
                  key={booking.bookingId}
                  className="bg-white rounded-lg shadow-md mb-6 p-4"
                >
                  <p className="text-gray-800 font-semibold mb-2">
                    Customer Name: {booking.customerName}
                  </p>
                  <p className="text-gray-700">
                    Service Name: {booking.serviceName}
                  </p>
                  <p className="text-gray-700">
                    Booking Date:{" "}
                    {new Date(booking.bookingDate).toLocaleString()}
                  </p>
                  <p className="text-gray-700">Time: {booking.time}</p>
                  <p className="text-gray-700">Status: {booking.status}</p>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-700">
                No bookings found.
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ViewBooking;
