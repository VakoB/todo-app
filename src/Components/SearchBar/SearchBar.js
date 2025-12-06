import "./SearchBar.css";
import searchIcon from "../../assets/search-icon.svg";

export default function SearchBar({ value, onChange, setFilteredList, itemsList }) {
  return (
    <div className="searchbar-wrapper">
      <input value={value} onChange={onChange} placeholder="Search note..." />
      <img
        onClick={() => {
          const search = value.trim().toLowerCase();
          if (search === "") {
            setFilteredList(itemsList);
            return;
          }

          const result = itemsList.filter((item) =>
            item.text.toLowerCase().includes(search)
          );

          setFilteredList(result);
        }}
        src={searchIcon}
        alt="search icon"
      />
    </div>
  );
}
