import {Footer, Navbar} from "./components";
import { Routes, Route, useLocation } from 'react-router-dom'
import {Favorites, Home, MovieDetails, Movies, MyBooking, SeatLayout} from "./pages";
import {Activity} from "react";
import {Toaster} from "react-hot-toast";

function App() {

  const isAdminRoute: boolean = useLocation().pathname.startsWith("/admin");

  return (
    <>
        <Toaster />

        <Activity mode={!isAdminRoute ? "visible" : "hidden"}>
            <Navbar />
        </Activity>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/:id/:date" element={<SeatLayout />} />
            <Route path="/mybookings" element={<MyBooking />} />
            <Route path="/favorite" element={<Favorites />} />
        </Routes>

        <Activity mode={!isAdminRoute ? "visible" : "hidden"}>
            <Footer />
        </Activity>
    </>
  )
}

export default App
