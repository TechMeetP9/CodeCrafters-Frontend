import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import EventCreation from "../pages/eventCreation/EventCreation";
import Landing from "../pages/landing/Landing";
import Home from "../pages/home/Home"; 
import UserProfile from "../pages/userProfile/UserProfile";
import EventDetail from '../pages/event/EventDetail'

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
        <Route path="/event-detail" element={<EventDetail />} />
        <Route path="/event-create" element={<EventCreation />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
