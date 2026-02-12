'use client';
import React from 'react';
import FormControls from '../form-controls';

const controlsProjectsFormData = [
  {
    name: 'name',
    label: 'Project Name',
    type: 'text',
    placeholder: 'Enter project name',
  },
  {
    name: 'technologies',
    label: 'Technologies',
    type: 'text',
    placeholder: 'Enter technologies used',
  },
  {
    name: 'description',
    label: 'Description',
    type: 'text',
    placeholder: 'Enter project description',
  },
  {
    name: 'website',
    label: 'Website',
    type: 'text',
    placeholder: 'Enter project website',
  },
  {
    name: 'github',
    label: 'GitHub',
    type: 'text',
    placeholder: 'Enter GitHub link',
  },
]
export default function AdminProjectView({projectFormData, setProjectFormData}) {
  return (
    <div className='w-full'>
      <div className='bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4'>

        <FormControls
          controlsFormData={controlsProjectsFormData}
          formData={projectFormData}
          setFormData={setProjectFormData}
        />
        <div className='flex justify-center'>
          <button className='bg-blue-600 cursor-pointer mt-1.25 border-blue-600 hover:bg-blue-700 text-white font-bold py-2 text-[16px] px-4 rounded focus:bg-green-800 focus:outline-none focus:shadow-outline mb-4' type='button'>
            Add Project
          </button>
        </div>
      </div>
    </div>
  )
}