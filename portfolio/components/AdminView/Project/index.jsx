"use client"
import React from 'react'
import FormControls from '../FormControls'

const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "Enter Technologies",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "Website",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "github",
  },
]

const AdminProjectView = ({formData, setFormData, HandleSave }) => {
  return (
    <div className="w-full">
    <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
   
      <FormControls
        controls={controls}
        formData={formData}
        setFormData={setFormData}
      />
      <button onClick={() => HandleSave('project')} className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">
        Add Info
      </button>
    </div>
  </div>

 
  )
}

export default AdminProjectView