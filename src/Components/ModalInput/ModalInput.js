import "./ModalInput.css";

export default function ModalInput(props) {
  return (
    <div className="modal-input-wrapper">
      <input
        {...props}
      />
    </div>
  );
}
