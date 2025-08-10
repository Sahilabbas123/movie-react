import React from 'react';
import { useState } from 'react';
import Search from './components/Search'; // Capital S

const App = () => {
  const [searchTerm, setSearchTerm] = useState('I am batman');
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> you'll Enjoy Without the Hassle
          </h1>
        </header>
        <Search  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> {/* Capital S here too */}
      </div>
    </main>
  );
};

export default App;
