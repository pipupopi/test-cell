import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SET_CURRENT_DATA } from "../../redux/data";
import { initialStateInterface } from "../../redux/initialState";
import { MAX_PAGE_ELEMENTS, ONE_PAGE } from "../../utils/const";
import "./footer.css";

function Footer() {
  const data = useSelector(
    (item: initialStateInterface) => item.data.cellData
  );
  const dispatch = useDispatch();
  const totalPages = Math.ceil(data.length / MAX_PAGE_ELEMENTS);
  const currentPageNum = [
    ...Array(Math.min(MAX_PAGE_ELEMENTS, totalPages)),
  ];
  const [currentPage, setCurrentPage] = useState(ONE_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage >= ONE_PAGE && newPage <= totalPages) {
      setCurrentPage(newPage);
      const firstIndex = (newPage - ONE_PAGE) * MAX_PAGE_ELEMENTS;
      const lastIndex = firstIndex + MAX_PAGE_ELEMENTS;
      const currentPageData = data.slice(firstIndex, lastIndex);
      dispatch(SET_CURRENT_DATA(currentPageData));
    }
  };

  return (
    <div className={"footer_wrapper"}>
      <Link to={`./${currentPage - ONE_PAGE}`}>
        <button
          onClick={() => handlePageChange(currentPage - ONE_PAGE)}
        >
          Назад
        </button>
      </Link>
      <span className={"pagination_block"}>
        {currentPageNum.map((_, index) => {
          const pageNumber = index + ONE_PAGE;
          return (
            <span
              key={pageNumber}
              style={
                currentPage === index + ONE_PAGE
                  ? { color: "green" }
                  : { color: "black" }
              }
            >
              {pageNumber}
            </span>
          );
        })}
      </span>
      <Link to={`./${currentPage + 1}`}>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Далее
        </button>
      </Link>
    </div>
  );
}

export default Footer;
