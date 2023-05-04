import React, { useState } from 'react';
import Navigation from "./Navigation";

export default function Header() {

const [currentPage, setCurrentPage] = useState('Home');
const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header>
      <h1 class="header">Devon Ethington</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  )

}
