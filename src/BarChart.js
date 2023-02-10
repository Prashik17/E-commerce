import React, { useState } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from "recharts";
import Navbar from "./Navbar";

const GraphForm = () => {
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const x = formData.get("x");
    const y = formData.get("y");

    setData([...data, { x, y }]);
  };

  return (
    <div className="bg-slate-100">
    <Navbar/>
      <form className="text-center" onSubmit={handleSubmit}>
      <h1 className="py-4 text-center font-extrabold font-sans text-2xl">Graph Plotter [BarChart]</h1>
        <div className="py-4">
          <label className="font-bold pr-4" htmlFor="x"> X :</label>
          <input className="border-4 border-red-200" type="text" id="x" name="x" />
        </div>
        <div className="pb-8">
          <label className="font-bold pr-4" htmlFor="y"> Y :</label>
          <input className="border-4 border-red-200" type="text" id="y" name="y" />
        </div>
        <button className=" px-4 py-2 rounded-md bg-green-400 font-extrabold hover:scale-105 duration-150" type="submit">Add Data Point</button>
      </form>
      <div className="lg:pl-[26%] pt-20">
      <BarChart width={800} height={400} data={data}>
        <Bar type="monotone" dataKey="y" stroke="#8884d8" background={{ fill: '#eee' }}/>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
      </div>
    </div>
  );
};

export default GraphForm;