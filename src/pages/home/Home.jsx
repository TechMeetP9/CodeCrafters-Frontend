import React, { useState, useEffect } from 'react';
import Background from '../../components/Background/background';
import Searchbar from '../../components/searchbar/searchbar';
import EventGrid from '../../components/eventgrid/EventGrid';
import Pagination from '../../components/pagination/Pagination';
import { getAllEvents } from '../../api/events';
import './Home.scss';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalEvents, setTotalEvents] = useState(0);
  const eventsPerPage = 15;

  useEffect(() => {
    const fetchTotalEvents = async () => {
      try {
        const data = await getAllEvents();
        setTotalEvents(data.length);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };

    fetchTotalEvents();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  return (
    <section className='home'>
      <Background />
      
      <main className='home-content'>
        <h1 className='page-title'>Search Tech Events</h1>
        <Searchbar onSearch={handleSearch} />
        
        <EventGrid 
          searchQuery={searchQuery} 
          currentPage={currentPage} 
        />
        
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </main>
    </section>
  );
}

export default Home;