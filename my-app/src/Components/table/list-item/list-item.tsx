import { useSelector } from "react-redux";
import { initialStateInterface } from "../../../redux/initialState";
import CellItem from "../cell-item/cell-item";
import "./list-item.css";

function ListItem() {
  const data = useSelector(
    (state: initialStateInterface) => state.data.currentCellData
  );

  return (
    <div className={"list_item_wrapper"}>
      {data.map((item) => (
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
