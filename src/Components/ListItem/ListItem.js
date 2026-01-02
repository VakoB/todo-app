import { useState } from "react";
import "./ListItem.css";
import editIcon from "../../assets/edit-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import checkIcon from "../../assets/check-icon.svg"
import { Check, X } from 'lucide-react'

export default function ListItem({ listItem, setItemsList, setFilteredList, darkMode }) {
  const [editItemId, setEditItemId] = useState(null);
  const [editItemInputText, setEditItemInputText] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const startEditing = () => {
    setEditItemInputText(listItem.text);
    setEditItemId(listItem.id);
  };

  const editConfirmHandle = () => {
    setItemsList(prev => {
      const updated = prev.map(item =>
        item.id === listItem.id
          ? { ...item, text: editItemInputText }
          : item
      );

      // keep filtered list in sync
      setFilteredList(updated);

      return updated;
    });

    setEditItemId(null);
  };

  const deleteItem = (id) => {
    setItemsList(prev => {
      const updated = prev.filter(item => item.id !== id);

      // keep filtered list in sync
      setFilteredList(updated);

      return updated;
    });
  };

  return (
    <div className="list-item-container">

      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          className="checkbox-input"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <img className="checkbox-custom" src={checkIcon} alt="check icon"/>
      </label>

      {editItemId !== listItem.id ? (
        <>
          <p className={`item-text ${isChecked && "crossed-text"} ${darkMode ? 'item-text-dark' : 'item-text-light'}`}>
            {listItem.text}
          </p>

          <div className="list-item-buttons">
            <img onClick={startEditing} src={editIcon} alt="edit icon" />
            <img onClick={() => deleteItem(listItem.id)} src={deleteIcon} alt="delete icon" />
          </div>
        </>
      ) : (
        <>
          <input
            className={`item-text ${darkMode ? 'item-text-dark' : 'item-text-light'}`}
            onChange={(e) => setEditItemInputText(e.target.value)}
            value={editItemInputText}
          />

          <div className="list-item-buttons">
            <Check
              onClick={editConfirmHandle}
              size={20}
              color="#CDCDCD"
            />
            <X
              color="#CDCDCD"
              size={20}
              onClick={() => setEditItemId(null)}
            />
          </div>
        </>
      )}

    </div>
  );
}

