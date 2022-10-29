import React, { useState } from "react";

const PhoneBook = () => {
  const [input, setInput] = useState("");
  const [listData, setListData] = useState([]);
  const [editId, setEditId] = useState(0);
  console.log(editId);
  const addData = () => {
    setListData((listData) => {
      const updatedData = [...listData, input];
      setInput("");
      return updatedData;
    });
    console.log(listData);
  };

  const removeData = (i) => {
    const updatedData = listData.filter((ele, id) => i != id);
    setListData(updatedData);
    return updatedData;
  };

  const editData = (i) => {
    const editDatas = listData.filter((ele, id) => i == id);
    setInput(editDatas);
    setEditId(i);
  };

  const removeAll = () => {
    setListData([]);
  };
  return (
    <div className="flex justify-center bg-slate-900 w-auto ">
      <h1 className="text-white ">Todo List</h1>
      <div className="flex items-center gap-8">
        <input
          type="text"
          className="w-80 h-10 p-4  "
          placeholder="Add Todolist"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-gray-500 p-3" onClick={addData}>
          ADD List
        </button>
      </div>
      <div className="text-white ">
        {listData.map((data, i) => (
          <>
            <div key={i}>{data}</div>
            <button
              className="text-white  bg-red-400"
              onClick={() => removeData(i)}
            >
              Remove
            </button>
            <button className="text-blue-800" onClick={() => editData(i)}>
              Edit
            </button>
          </>
        ))}
      </div>
      <button className="bg-red-900" onClick={removeAll}>
        Remove All
      </button>
    </div>
  );
};

export default PhoneBook;
