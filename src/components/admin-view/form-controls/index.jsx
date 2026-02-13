'use client';
import React from 'react';

export default function FormControls({ controlsFormData, formData, setFormData }) {
  return (
    controlsFormData.map(controlItem => (
      <div
        className='mb-4 group transition-all duration-300'
        key={controlItem.name}
      >
        <label
          className='block text-gray-600 text-sm font-semibold mb-2 group-focus-within:text-blue-600 transition-colors duration-300'
          htmlFor={controlItem.name}
        >
          {controlItem.label}
        </label>

        <input
          placeholder={controlItem.placeholder}
          type={controlItem.type}
          name={controlItem.name}
          value={formData[controlItem.name]}
          onChange={(e) =>
            setFormData({
              ...formData,
              [controlItem.name]: e.target.value,
            })
          }
          className='
          w-full px-4 py-3
          rounded-xl
          border border-gray-300
          bg-white
          shadow-sm
          text-gray-700
          placeholder-gray-400
          transition-all duration-300
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
          focus:border-blue-500
          hover:shadow-md
        '
        />
      </div>
    ))
  )

}