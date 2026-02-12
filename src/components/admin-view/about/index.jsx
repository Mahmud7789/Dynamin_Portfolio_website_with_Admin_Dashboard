'use client';
import React from 'react';
import FormControls from '../form-controls';

const controlsAboutFormData = [
  {
    name: 'aboutme',
    placeholder: 'Enter About Me',
    label: 'About Me',
    type: 'text',
  },
  {
    name: 'noofprojects',
    placeholder: 'Enter Number of Projects',
    label: 'Number of Projects',
    type: 'number',
  },
  {
    name: 'noofclients',
    placeholder: 'Enter Number of Clients',
    label: 'Number of Clients',
    type: 'number',
  },
  {
    name: 'yearofexperience',
    placeholder: 'Enter Years of Experience',
    label: 'Years of Experience',
    type: 'number',
  },
  {
    name: 'skills',
    placeholder: 'Enter Skills',
    label: 'Skills',
    type: 'text',
  },
]
export default function AdminAboutView({aboutFormData, setAboutFormData}) {

  return(
    <div className='w-full'>
      <div className='bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4'>

        <FormControls
          controlsFormData={controlsAboutFormData}
          formData={aboutFormData}
          setFormData={setAboutFormData}
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