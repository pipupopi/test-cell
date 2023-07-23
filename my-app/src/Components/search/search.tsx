import { useDispatch, useSelector } from "react-redux";
import LoupeImg from "../../assets/search-loupe.svg";
import { SET_CURRENT_DATA } from "../../redux/data";
import { initialStateInterface } from "../../redux/initialState";
import { formatText } from "../../utils/formatText";
import "./search.css";

function Search() {
  const dispatch = useDispatch();
  const data = useSelector(
    (item: initialStateInterface) => item.data.cellData
  );

  const findCell = (input: string) => {
    const textLower = input.toLocaleLowerCase();
    const results = data.filter(
      (item) =>
        item.id.toString().includes(textLower) ||
        item.title.includes(textLower) ||
        formatText(item.body).includes(textLower)
    );
    dispatch(SET_CURRENT_DATA(results));
  };

  return (
    <div className={"search_wrapper"}>
      <form
        className={"search_form"}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          placeholder="Поиск"
          onChange={(event) => findCell(event.target.value)}
        />
        <div className="test" style={{ width: "60px" }}>
          <button>
            <img
              src={LoupeImg}
              alt="Loupe"
              className={"loupe_btn_icon"}
            />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
