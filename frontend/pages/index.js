import React from "react";
import { useState, useEffect } from "react";
import { redirect } from 'next/navigation';

import NewUserForm from "./NewUserForm";
import UserTable from "@components/UserTable";
import { Read, CreateOrUpdate,Delete } from "../components/HttpClient/CRUD";

export const getStaticProps = async () => {
  const data = await Read();
  if (!data || data === "error") {
    redirect('/Error');
    return {
      notFound: true,
    }
  }
  return {
    props: { data },
  }
};


const index = ({data}) => {
  const [users, setUsers] = useState(data ?? []);

  const addUser = async (user) => {
    const res = await CreateOrUpdate(user, "create");
    if (res == true) {
    setUsers([...users, user]);
    }
    //вывести алерт об ошибки на пол экрана
  };
  const editUser = async (user) => {
    const res = await CreateOrUpdate(user, "update");
    if (res == true) {
      setUsers(
        users.map((data) => {
          return data.id === user.id ? user : data;
        })
      );
    }
     //вывести алерт об ошибки на пол экрана
  };

  const deleteUser = async (user) => {
    const res = await Delete(user);
    if (res == true) {
      setUsers(
        users.filter((data) => {
          return data.id !== user.id;
        })
      );
    }

  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Список пользователей</h1>
      <NewUserForm onAddUser={addUser} />
      <UserTable
        users={users}
        onEditUser={editUser}
        onDeleteUser={deleteUser}
      />
    </div>
  );
};

export default index;
