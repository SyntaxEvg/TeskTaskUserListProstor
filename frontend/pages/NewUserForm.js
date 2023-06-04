

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function NewUserForm({ onAddUser }) {
  const [userData, setUserData] = useState({
    name: '',
    surname: ''
  });
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uuidv4(); // генерируем новый GUID
    if (!userData.name || !userData.surname) {
      alert("Please fill in all fields");
      return;
    } 
    //if (!validateEmail(email)) {
    //  alert("Please enter a valid email address");
    //  return;
    //}
    if (userData && userData.name.trim() !== '' && userData.surname.trim() !== '') {
      onAddUser({...userData, id });
      setUserData({
        id :'',
        name: '',
        surname:'',
      });
    }
  };

  const handleChange = (event) => {
    //setName(event.target.value);
    const {value,id } = event.target;
    if(id === 'name'){
      setUserData(prevState => ({...prevState, name: value }));
    }
    else if(id === 'surname'){
      setUserData(prevState => ({...prevState, surname: value }));
    }
  };


  return (
   // <div className="border border-black-500 rounded-lg m-8">
    <form onSubmit={handleSubmit} className="mt-4 mb-4 flex flex-col items-center">
      <h2 className="text-lg font-bold">Новый пользователь</h2>
      <div className="flex w-full mt-4 mb-4">
        <div className="w-1/2 mr-2 m-5">
          <label htmlFor="name" className="block font-semibold">Имя:</label>
          <input type="text" id="name" value={userData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="w-1/2 ml-2 m-5">
          <label htmlFor="surname" className="block font-semibold">Фамилия:</label>
          <input type="text" id="surname" value={userData.surname} onChange={handleChange} className="w-full  border border-gray-300 rounded-md p-2" />
        </div>
      </div>
      <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end m-5">Добавить</button>
    </form>
  );
}

export default NewUserForm;