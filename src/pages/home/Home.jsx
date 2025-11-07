import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Background from '../../components/Background/background';
import SearchBar from '../../components/searchbar/searchbar';
import HomeEventList from '../../components/homeeventlist/HomeEventList';
import Pagination from '../../components/pagination/Pagination';
import ColorCard2 from '../../components/startnowcard/startnowcard';
import './Home.scss';
import cardBg from '../../assets/Card1.png';
import mascot from '../../assets/happymonster.png';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); 
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <Background />
      <Navbar />
      
      <div className="home-content-wrapper">
        <div className="home-header">
          <h1 className="home-title">Search Tech Events</h1>
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <div className="home-content">
          <HomeEventList 
            searchQuery={searchQuery} 
            currentPage={currentPage}
          />
        </div>

        <Pagination 
          currentPage={currentPage}
          totalPages={5}
          onPageChange={handlePageChange}
        />

     
      <section className="cards-section">
        <div className="cards-section__wrapper">
          <div className="cards-section__row">
            <ColorCard2
              title="Create your Own Event"
              imageSrc={mascot}
              backgroundImage={cardBg}
              onButtonClick={() => console.log('create event')}
            />
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
