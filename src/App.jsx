import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/home/Home';
import EventDetail from './pages/event/EventDetail';
import Header from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/home-page" element={<Home />} />
            <Route path="/event-detail" element={<EventDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;