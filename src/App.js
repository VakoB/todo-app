import { useState } from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import Modal from "./Components/Modal/Modal";
import "./App.css";
import ListItem from "./Components/ListItem/ListItem";
import addButton from "./assets/add-button.svg";
import dropdownIcon from "./assets/dropdown-icon.svg";
import darkModeIcon from "./assets/dark-mode.svg";
import nothingHereImage from "./assets/nothing-here.png";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const areThereNoItems = filteredList.length === 0;

  return (
    <div className="content">
      <h1>TODO LIST</h1>
      <div className="tools">
        <SearchBar itemsList={itemsList} setFilteredList={setFilteredList} value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
        <div className="filter-dropdown">
          <span>ALL</span>
          <img src={dropdownIcon} alt="dropdown icon" />
        </div>
        <div className="dark-mode-button">
          <img src={darkModeIcon} alt="dark mode icon" />
        </div>
      </div>

      <div className="item-list">
        {areThereNoItems && (
          <>
            <img
              className="nothing-here-image"
              src={nothingHereImage}
              alt="nothing here"
            />
            <p className="nothing-here-text">Empty...</p>
          </>
        )}
        {filteredList.map((item) => (
          <ListItem setFilteredList={setFilteredList} listItem={item} setItemsList={setItemsList} />
        ))}
      </div>
      {modalVisible && (
        <Modal setFilteredList={setFilteredList} setModalVisible={setModalVisible} setItemsList={setItemsList} />
      )}
      <div className="add-button" onClick={() => setModalVisible(true)}>
        <img src={addButton} alt="add button" />
      </div>
    </div>
  );
}

export default App;
