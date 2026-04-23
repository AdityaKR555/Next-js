"use client"
import React, { useState } from 'react'

function Input({data, setData}) {
  const [skillInput, setSkillInput] = useState("");

   // 🔹 Handle simple fields
  const handleChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  // 🔹 Skills handlers
  const addSkill = () => {
    if(!skillInput.trim()) return;

    setData({
      ...data,
      skills : [...data.skills, skillInput]
    });
    setSkillInput("");
  }

  const removeSkill = (i) => {
    const updated = data.skills.filter((_, index) => index !== i);
    setData({ ...data, skills: updated });
  }

  return (
    <div className="w-full md:w-1/2 space-y-6 overflow-y-auto max-h-[90vh]">

      <p className='text-2xl text-[#90A955] font-semibold'>Fill Following Details:</p>

      {/* Personal Info */}
      <div className="border p-4 rounded-xl bg-[#4F772D] border-[#132A13]">
        <h2 className="font-bold mb-2 text-black">Personal Info</h2>

        <input
          className="w-full border py-2 px-4 mb-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#90A955]"
          placeholder="Name"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <textarea
          className="w-full border py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#90A955]"
          placeholder="Bio"
          value={data.bio}
          onChange={(e) => handleChange("bio", e.target.value)}
        />
      </div>

      {/* Skills */}
      <div className="border p-4 rounded-xl bg-[#4F772D] border-[#132A13]">
        <h2 className="font-bold mb-2 text-black">Skills</h2>
         <div className="flex gap-2">
          <input
            className="border py-2 px-4 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#90A955]"
            placeholder="Add skill"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          />
          <button onClick={addSkill} className="px-3 bg-[#31572C] rounded-lg text-white hover:bg-[#132A13]">
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {data.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-[#90A955] px-4 py-2 rounded-lg cursor-pointer font-semibold hover:text-red-600"
              onClick={() => removeSkill(i)}
            >
              {skill} ✕
            </span>
          ))}
        </div>
      </div>

     
    </div>
  );
}

export default Input
