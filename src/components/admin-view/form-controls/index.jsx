'use client';
import React from 'react';

export default function FormControls({ controlsFormData, formData, setFormData }) {
  return(
    controlsFormData.map( controlItem => <div className='mb-4' key={controlItem.name}>
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={controlItem.name}>
        {controlItem.label}
      </label>
      <input 
      placeholder={controlItem.placeholder}
      type={controlItem.type}
      name={controlItem.name}
      value={formData[controlItem.name]}
      onChange={(e) => setFormData({
        ...formData,
        [controlItem.name]: e.target.value,
      })} 
      className='shadow bg-white  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight tracking-wide focus:outline-none focus:shadow-outline'
      >
      
      </input>
    </div>) 
  )
}