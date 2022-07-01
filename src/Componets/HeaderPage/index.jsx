import React, {useState}  from 'react';
import styles from "./styles.module.scss";
import Item from "../Item";
import Pagination from "../Pagination";
import data from "../../data.json";

const HeaderPage = () => {
  const [posts, setPosts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  function selectFunc() {
    let selectBox = document.getElementById("selectBox");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setPostsPerPage(selectedValue);
  }
  return (
    <>
      <div className={styles.header}>
        <p>Номер / Дата</p>
        <p>Тип задания / Автор</p>
        <p>Аккаунт / Терминал</p>
        <p>Статус</p>
      </div>
      <div>
        <Item items={currentPosts}/>
        <div className={styles.paginationContainer}>
          <h2>Всего записей: {posts.length}</h2>
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
          <select
            className={styles.select}
            id='selectBox'
            name="select"
            onChange={selectFunc}>
            <option value="9">9</option>
            <option value="12" selected>12</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
