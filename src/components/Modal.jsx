import React, { useState } from 'react';
import Modal from 'react-modal';
import { down } from "../assets";
const WelcomeModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    content: {
      width: '20%', // Adjust the width as needed
      height: '38%', // Adjust the height as needed
      margin: 'auto', // Center the modal horizontally
      marginTop: '24%', // Adjust the top margin as needed
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Welcome Modal"
      style={customStyles}
    >
      <div className="mx-auto">
      <img src={down} className="mx-auto" alt="menu" />
      </div>
    </Modal>
  );
};

export default WelcomeModal;
