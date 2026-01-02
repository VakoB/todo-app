import "./ModalInput.css";

export default function ModalInput({darkMode, ...otherProps}) {
  return (
    <div className={`modal-input-wrapper ${darkMode && "modal-input-wrapper-dark"}`}>
      <input
        {...otherProps}
      />
    </div>
  );
}
