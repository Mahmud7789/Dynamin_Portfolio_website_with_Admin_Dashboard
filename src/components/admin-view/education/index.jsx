'use client';
import React from 'react';
import FormControls from '../form-controls';

const controlsEducationFormData = [
  {
    name: 'institution',
    placeholder: 'Enter your institution name',
    label: 'Institution',
    type: 'text',
  },
  {
    name: 'degree',
    placeholder: 'Enter your degree',
    label: 'Degree',
    type: 'text',
  },
  {
    name: 'fieldofstudy',
    placeholder: 'Enter your field of study',
    label: 'Field of Study',
    type: 'text',
  },
  {
    name: 'startyear',
    placeholder: 'Enter your start year',
    label: 'Start Year',
    type: 'text',
  },
  {
    name: 'endyear',
    placeholder: 'Enter your end year',
    label: 'End Year',
    type: 'text',
  },
  {
    name: 'grade',
    placeholder: 'Enter your grade',
    label: 'Grade',
    type: 'text',
  },
]
export default function AdminEducationView({ educationFormData, setEducationFormData }) {
  return (
    <div className='w-full'>
      <div className='bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4'>

        <FormControls
          controlsFormData={controlsEducationFormData}
          formData={educationFormData}
          setFormData={setEducationFormData}
        />
        <div className='flex justify-center'>
          <button className='bg-blue-600 cursor-pointer mt-1.25 border-blue-600 hover:bg-blue-700 text-white font-bold py-2 text-[16px] px-4 rounded focus:bg-green-800 focus:outline-none focus:shadow-outline mb-4' type='button'>
            Add Education
          </button>
        </div>
      </div>
    </div>
  )
}