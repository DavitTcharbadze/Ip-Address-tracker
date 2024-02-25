/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import InfoBox from './components/InfoBox';
import classes from './modules/SearchBar.module.scss';

const App = () => {
  const [ipData, setIpData] = useState()

  const handleSearch = (data) => {
    setIpData(data)
  }

  return (
    <div>
      <div className={classes['search-bar-container']}>
        <div className={classes['input-container']}>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      {ipData && <InfoBox data={ipData} />}
    </div>
  )
}

export default App;
