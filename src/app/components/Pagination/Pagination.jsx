// components/Pagination.js
import React from "react";
import styles from "./pagination.module.css";
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className={styles.pagination}>
      <p
        className={styles.pageItem}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <PiLessThan size={20} />
      </p>
      {pages.map((page) => (
        <p
          key={page}
          className={`${styles.pageItem} ${
            currentPage === page ? styles.active : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </p>
      ))}
      <p
        className={styles.pageItem}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <PiGreaterThan size={20} />
      </p>
    </div>
  );
};

export default Pagination;
