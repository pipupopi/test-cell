import { useSelector } from "react-redux";
import { initialStateInterface } from "../../../redux/initialState";
import CellItem from "../cell-item/cell-item";
import "./list-item.css";
import { MAX_PAGE_ELEMENTS, ONE_PAGE } from "../../../utils/const";

function ListItem() {
  const data = useSelector(
    (state: initialStateInterface) => state.data.currentCellData
  );
  const pages = useSelector(
    (item: initialStateInterface) => item.pages.page
  );

  const firstIndex = (pages - ONE_PAGE) * MAX_PAGE_ELEMENTS;
  const lastIndex = firstIndex + MAX_PAGE_ELEMENTS;
  const currentPageData = data.slice(firstIndex, lastIndex);

  return (
    <div className={"list_item_wrapper"}>
      {currentPageData.map((item) => (
        <CellItem
          id={item.id}
          title={item.title}
          description={item.body}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default ListItem;
