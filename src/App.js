import { useState } from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import Modal from "./Components/Modal/Modal";
import "./App.css";
import ListItem from "./Components/ListItem/ListItem";
import addButton from "./assets/add-button.svg";
import dropdownIcon from "./assets/dropdown-icon.svg";
import darkModeIcon from "./assets/dark-mode.svg";
import nothingHereImage from "./assets/nothing-here.png";
import lightModeIcon from "./assets/light-mode.svg";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const areThereNoItems = filteredList.length === 0;

  return (
    <div className={`content ${darkMode && "content-dark"}`}>
      <h1 className={darkMode && 'h1-dark'}>TODO LIST</h1>
      <div className="tools">
        <SearchBar
          itemsList={itemsList}
          setFilteredList={setFilteredList}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          darkMode={darkMode}
        />
        <div className="filter-dropdown">
          <span>ALL</span>
          <img src={dropdownIcon} alt="dropdown icon" />
        </div>
        <div
          className="dark-mode-button"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? (
            <img src={lightModeIcon} alt="light mode icon" />
          ) : (
            <img src={darkModeIcon} alt="dark mode icon" />
          )}
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
            <p className={`nothing-here-text ${darkMode && "nothing-here-text-dark"}`}>Empty...</p>
          </>
        )}
        {filteredList.map((item) => (
          <ListItem
            setFilteredList={setFilteredList}
            listItem={item}
            setItemsList={setItemsList}
            darkMode={darkMode}
          />
        ))}
      </div>
      {modalVisible && (
        <Modal
          setFilteredList={setFilteredList}
          setModalVisible={setModalVisible}
          setItemsList={setItemsList}
          darkMode={darkMode}
        />
      )}
      <div className="add-button" onClick={() => setModalVisible(true)}>
        <img src={addButton} alt="add button" />
      </div>
    </div>
  );
}

export default App;
