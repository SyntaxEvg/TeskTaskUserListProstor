import react from "react";
import { useState, useEffect, useRef } from "react";
import ModalManual from "@components/modal";
import PaginationTable from "@components/PaginationTable";
import { useRouter } from "next/router";

const UserTable = ({ users, onEditUser, onDeleteUser }) => {
  const [currentPage, setCurrentPage] = useState(1);
  //const recordPerPage = 3; //макс кол-во для отображение в пагинации
  const recordPerPage = process.env.NEXT_PUBLIC_recordPerPage; //макс кол-во для отображение в пагинации
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(users.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: "",
    name: "",
    surname: "",
  });

  const handleCancel = () => {
    setEditing(false);
    setCurrentUser({ id: null, name: "", age: "", email: "" });
  };

  const handleUpdate = (data) => {
    onEditUser(data);
    setEditing(false);
    setCurrentUser({ id: null, name: "", age: "", email: "" });
  };

  const prePage = () => {
    if (currentPage != firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changePage = (n) => {
    setCurrentPage(n);
  };
  const nextPage = () => {
    if (currentPage != lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
  const CloneObj = () => {
    const clone = [];
    {
      Object.assign(clone, currentUser);
    }
    return clone;
  };

  return (
    <div>
      <table className="w-full table-auto text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Имя</th>
            <th className="px-4 py-2">Фамилия</th>
            <th className="px-4 py-2">Действия</th>
          </tr>
        </thead>
        <tbody className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {records.map((data) => (
            <tr
              key={data.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td hidden className="px-4 py-2">
                {data.id}
              </td>
              <td className="px-4 py-2">{data.name}</td>
              <td className="px-4 py-2">{data.surname}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => {
                    setEditing(true);
                    setCurrentUser(data);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2  animate-pulse"
                >
                  Редактировать
                </button>

                <button
                  onClick={() => {
                    setCurrentUser(data);
                    onDeleteUser(data);
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded animate-pulse"
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationTable
        numbers={numbers}
        prePage={prePage}
        changePage={changePage}
        nextPage={nextPage}
      />

      {editing ? (
        <ModalManual
          handleUpdate={handleUpdate}
          handleCancel={handleCancel}
          Title="Edit Model"
          IsShow={editing}
          currentUser={CloneObj()}
        />
      ) : null}
    </div>
  );
};

export default UserTable;
