import { useState } from "react";
import "./Modal.css";
import ModalInput from "../ModalInput/ModalInput";

export default function Modal({
  setModalVisible,
  setItemsList,
  setFilteredList,
  darkMode,
}) {
  const [modalInputText, setModalInputText] = useState("");

  const addItemHandler = () => {
    const newItem = { id: Date.now(), text: modalInputText };

    setItemsList((prev) => {
      const updated = [...prev, newItem];
      setFilteredList(updated);
      return updated;
    });

    setModalInputText("");
    setModalVisible(false);
  };
  return (
    <div className="modal-overlay" onClick={() => setModalVisible(false)}>
      <div className={`modal ${darkMode && "modal-dark"}`} onClick={(e) => e.stopPropagation()}>
        <div className="add-new-note-container">
          <h2>NEW NOTE</h2>
          <ModalInput
            value={modalInputText}
            onChange={(e) => setModalInputText(e.target.value)}
            placeholder="Input your note..."
            darkMode={darkMode}
          />
        </div>

        <div className="modal-buttons">
          <button
            onClick={() => {
              setModalVisible(false);
            }}
            className="modal-button modal-cancel-button"
          >
            CANCEL
          </button>

          <button
            className="modal-button modal-apply-button"
            onClick={addItemHandler}
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
}
