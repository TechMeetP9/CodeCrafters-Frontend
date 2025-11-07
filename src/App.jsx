import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './styles/main.scss';
import EventDetail from './pages/event/EventDetail';
import Header from './components/navbar/navbar';
import Footer from './components/footer/footer';

// Wrapper para pasar el eventId desde la URL
const EventDetailPageWrapper = () => {
  const { id } = useParams();
  return <EventDetailPage eventId={id} />;
};

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/event-detail" element={<EventDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;