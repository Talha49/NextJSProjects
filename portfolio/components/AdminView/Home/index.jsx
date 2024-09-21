"use client"
import React from 'react'
import FormControls from '../FormControls'



const controls = [
    {
      name: "heading",
      placeholder: "Enter heading text",
      type: "text",
      label: "Enter heading text",
    },
    {
      name: "summary",
      placeholder: "Enter Career summary",
      type: "text",
      label: "Enter Career summary",
    },
  ];
  
const AdminHomeView = ({formData,setFormData, HandleSave}) => {
    console.log(formData)
  return (
    <div>
        <div>
            <FormControls
            controls={controls}
            formData={formData}
            setFormData={setFormData}
            />

            <button onClick={() => HandleSave('home')}>Add Info</button>
        </div>
    </div>
  )
}

export default AdminHomeView