import { useState } from "react";


export default function Todoinput() {
  const [addValue, setAddValue] = useState("");
  const [data, setData] = useState([]);

  function handleAdd() {
    if (!addValue) {
      alert("Enter the text");
    } else {
      setData([...data, addValue]);
      setAddValue("");
    }
  }

  function handleRemove(index) {
    const updatedData = data.filter((item, indexItem) => indexItem !== index);
    setData(updatedData);
  }

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <div className="flex gap-2 items-center mb-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your text"
            onChange={(e) => setAddValue(e.target.value)}
            value={addValue}
          />
          <button
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={handleAdd}
          >
          Add
          </button>
        </div>
        <ul className="space-y-2">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm"
            >
              <span>{item}</span>
              <button
                className="flex items-center px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => handleRemove(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
