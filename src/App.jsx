import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './styles/main.scss';
import EventDetail from './pages/event/EventDetail';
import Header from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Landing from './pages/landing/Landing'
import AppRouter from './router/Router';

// Wrapper para pasar el eventId desde la URL
const EventDetailPageWrapper = () => {
  const { id } = useParams();
  return <EventDetailPage eventId={id} />;
};

function App() {
  return (
    <AppRouter />
  );
}

export default App;