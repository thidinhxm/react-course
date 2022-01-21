import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={openModal}>Delete</button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/>}
      {modalIsOpen && <Backdrop onCancel={closeModal}/>}
  </div>      
  );
}
  
export default Todo;