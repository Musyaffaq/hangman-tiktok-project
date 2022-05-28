import { React, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ChooseWords from "./CategoriesBtn";

const ModalCategory = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var isEmpty = false 
    
    const word = sessionStorage.getItem("word")
    console.log(word)

    if (word === null) {
      isEmpty = true
    } 
  
    const endGame = () => {
      
      sessionStorage.clear()
      window.location.reload();
      
    };

    return (
      <div>
        <div className="text-right">
          {isEmpty ? <Button variant="success" onClick={handleShow}> Start Game </Button> : <Button variant="danger" onClick={endGame}> End Game </Button>}
        </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pick One Category</Modal.Title>
          </Modal.Header>
          <Modal.Body><ChooseWords></ChooseWords></Modal.Body>
        </Modal>
      </div>
    );
  }
  
export default ModalCategory;