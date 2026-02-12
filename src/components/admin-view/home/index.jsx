'use client';
import React from 'react';
import FormControls from '../form-controls';

const controlsHomeFormData = [
  {
    name: 'heading',
    placeholder: 'Enter Heading',
    label: 'Heading',
    type: 'text',
  },
  {
    name: 'summary',
    placeholder: 'Enter Career Summary',
    label: 'Summary',
    type: 'text',
  },
]

export default function AdminHomeView({homeFormData, setHomeFormData}) {
  return(
    <div className='w-full'>
      <div className='bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4'>

        <FormControls
          controlsFormData={controlsHomeFormData}
          formData={homeFormData}
          setFormData={setHomeFormData}
        />

        <div className='flex justify-center'>
            <button className='bg-blue-600 cursor-pointer mt-1.25 border-blue-600 hover:bg-blue-700 text-white font-bold py-2 text-[16px] px-4 rounded focus:bg-green-800 focus:outline-none focus:shadow-outline mb-4' type='button'>
               Add Info
            </button>
          </div>

      </div>

    </div>
  )
}