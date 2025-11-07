import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import EventCreation from "../pages/eventCreation/EventCreation";
import Landing from "../pages/landing/Landing";
import Home from "../pages/home/Home";
import EventDetailPage from "../pages/event/EventDetailPage"; 
import UserProfile from "../pages/userProfile/UserProfile";


const EventDetailWrapper = () => {
  const { id } = useParams();
  return <EventDetailPage eventId={id} />;
};

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events/:id" element={<EventDetailWrapper />} /> {/* 👈 detalle */}
        <Route path="/event-create" element={<EventCreation />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
