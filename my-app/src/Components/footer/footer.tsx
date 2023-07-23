import { Link } from "react-router-dom";
import "./footer.css";
import { useDispatch, useSelector } from "react-redux";
import { initialStateInterface } from "../../redux/initialState";
import { MAX_PAGE_ELEMENTS, ONE_PAGE } from "../../utils/const";
import { NEXT_PAGE, PREV_PAGE } from "../../redux/page";
import { AnyAction } from "@reduxjs/toolkit";

function Footer() {
  const currentPage = useSelector(
    (item: initialStateInterface) => item.pages.page
  );
  const data = useSelector(
    (item: initialStateInterface) => item.data.currentCellData
  );
  const dispatch = useDispatch();
  const totalPages = Math.ceil(data.length / MAX_PAGE_ELEMENTS);
  const currentPageNum = [
    ...Array(Math.min(MAX_PAGE_ELEMENTS, totalPages)),
  ];

  function pagination(action: () => AnyAction) {
    dispatch(action());
  }

  return (
    <div className={"footer_wrapper"}>
      {currentPage === ONE_PAGE ? (
        <button>Назад</button>
      ) : (
        <Link to={`./${currentPage - ONE_PAGE}`}>
          <button onClick={() => pagination(PREV_PAGE)}>Назад</button>
        </Link>
      )}
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
      {currentPage === MAX_PAGE_ELEMENTS ? (
        <button>Далее</button>
      ) : (
        <Link to={`./${currentPage + 1}`}>
          <button onClick={() => pagination(NEXT_PAGE)}>Далее</button>
        </Link>
      )}
    </div>
  );
}

export default Footer;
