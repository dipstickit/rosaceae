import React, { useState } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta + 1;
    const range: (number | string)[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number = 0;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (typeof i === 'number' && i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (typeof i !== 'number' || i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      if (typeof i === 'number') {
        l = i;
      }
    }

    return rangeWithDots;
  };

  const handleClick = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page);
    }
  };

  const pageNumbers = getPageNumbers();

  return (
    <ul className="pagination flex text-2xl my-20">
      {pageNumbers.map((page:any, index) => (
        <li
          key={index}
          className={`mx-2 border px-4 py-2 rounded-xl ${page === '...' ? 'ellipsis' : currentPage == page ? 'active bg-blue-500 text-white-A700 font-medium' : 'text-blue-500'}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
