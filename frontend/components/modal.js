"use client";
import styles from "../pages/styles/modal.module.css";
import { Alert, Button, Modal } from "flowbite-react";

import { useState, useEffect, useReducer,useRef } from "react";


const ModalManual = ({ Title,handleUpdate, handleCancel, IsShow, currentUser }) => {

  const [nameElementIsFocus,setNameElementIsFocus] =useState(null);

  const inputRefs = {
    name: useRef(null),
    surname: useRef(null),
  }

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_VALUE":
          const { name, value } = event.target;
           setNameElementIsFocus(name);
            let temp ={ ...state.value,[name]: value};
            return{ ...state, value: temp };
        default:
          return state;
      }
    },
    { value: {...currentUser} }
  );

  function handleInputChange(event) {
    dispatch({ type: "SET_VALUE", payload: event.target.value });
  }
  useEffect(() => {
    if (IsShow && inputRefs) {

        if(nameElementIsFocus === 'name'){
            inputRefs.name.current.focus();
        }
        else if(nameElementIsFocus === 'surname'){
            inputRefs.surname.current.focus();
        }
    }
  }, [handleInputChange]);
  //  }

  return (
    <>
      <Alert color="info">Alert!</Alert>;
      <Modal show={IsShow} onClose={handleCancel}>
        <Modal.Header>
          {Title}: {currentUser.name}
        </Modal.Header>
        <Modal.Body>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleUpdate}
          >
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={state.value.name}
              onChange={handleInputChange}
              ref={inputRefs.name}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Фамилия:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="surname"
              value={state.value.surname}
              onChange={handleInputChange}
              ref={inputRefs.surname}
            />
          </form>
        </Modal.Body>
        <Modal.Footer className="flex items-center justify-between">

          <Button onClick={() =>handleUpdate(state.value)}>Update</Button> 
          <Button color="gray" onClick={handleCancel}>
            {" "}
            <p>Cancel</p>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalManual;
