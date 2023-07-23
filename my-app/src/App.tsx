import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./Components/footer/footer";
import Header from "./Components/header/header";
import Search from "./Components/search/search";
import ListItem from "./Components/table/list-item/list-item";
import { SET_CURRENT_DATA, SET_DATA } from "./redux/data";
import "./styles/globals.css";
import {
  API_URL,
  FIRST_PAGE_ELEMENT,
  MAX_PAGE_ELEMENTS,
} from "./utils/const";
import { getDataReq } from "./utils/request";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await getDataReq(API_URL);
      const currentData = await response.slice(
        FIRST_PAGE_ELEMENT,
        MAX_PAGE_ELEMENTS
      );
      dispatch(SET_DATA(await response));
      dispatch(SET_CURRENT_DATA(await currentData));
    };
    getData();
  }, []);

  return (
    <div className={"app_wrapper"}>
      <div className={"app_container"}>
        <Search />
        <Header />
        <ListItem />
        <Footer />
      </div>
    </div>
  );
}

export default App;
