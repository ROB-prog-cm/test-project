import React from 'react';
import styles from './styles.module.scss'

const Pagination = ({postsPerPage, totalPosts, currentPage, paginate}) => {

  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className={styles.pagination}>
        {pageNumbers.map(number => (
          <p
            onClick={() => paginate(number)}
            key={number}
            className={currentPage === number ? styles.active : styles.pageItem}
          >
            <a className={styles.pageLink} >
              {number}
            </a>
          </p>
        ))}
      </div>
    </>
  );
};

export default Pagination;
