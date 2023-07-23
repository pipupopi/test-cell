import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowImg from "../../assets/downArrow.svg";
import { SET_CURRENT_DATA } from "../../redux/data";
import { initialStateInterface } from "../../redux/initialState";
import { CELL_TITLES } from "../../utils/const";
import { sortAlphabetically } from "../../utils/filter";
import "./header.css";

interface DataItem {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function Header() {
  const defaultData = useSelector(
    (item: initialStateInterface) => item.data.cellData
  );
  const [activeKey, setActiveKey] = useState<keyof DataItem | null>(
    null
  );

  const dispatch = useDispatch();

  function sort(key: keyof DataItem) {
    if (activeKey === key) {
      setActiveKey(null);
      dispatch(SET_CURRENT_DATA(defaultData));
    } else {
      const sorted = sortAlphabetically([...defaultData], key);
      setActiveKey(key);
      dispatch(SET_CURRENT_DATA(sorted));
    }
  }

  return (
    <div className={"header_wrapper"}>
      <div className={"header_list_options"}>
        {CELL_TITLES.map((item) => (
          <div
            className={"header_title"}
            key={item.id}
            onClick={() => sort(item.label as keyof DataItem)}
          >
            <span>{item.title}</span>
            <img
              src={ArrowImg}
              alt="downArrow"
              className={
                activeKey === item.label
                  ? "arrow_image_up"
                  : "arrow_image_down"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
