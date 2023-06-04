export { Read, CreateOrUpdate, Delete };

const baseUrl = process.env.NEXT_PUBLIC_API_HOST; //'http://localhost:7298'; //http://localhost:7298/api/users/read

const Read = async (operation = "read") => {
  //чтение данных get
  try {///api/users/read
    console.log("Resp:" +`${baseUrl}/api/users/${operation}`);
    const response = await fetch(`${baseUrl}/api/users/${operation}`);
    //console.log(response)
    const data = await response.json();
    if (!data) {
      return [];
    }
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
const CreateOrUpdate = async (user, operation = "update") => {
  //Api create  or  update
  try {
    const response = await fetch(`${baseUrl}/api/users/${operation}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const res = await response.json();
    if(res)
    return res;
  } catch (e) {
    return false;
  }
  return false;
};
const Delete = async (user, operation = "delete") => {

  try {
    const response = await fetch(`${baseUrl}/api/users/${operation}?id=${user.id}`, {
      method: "DELETE",
    });
    const res = await response.json();
    if(res)
    return res;
  } catch (e) {
    return false;
  }
  return false;
};
