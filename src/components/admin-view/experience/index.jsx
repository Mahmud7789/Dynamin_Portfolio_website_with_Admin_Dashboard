'use client';
import React from 'react';
import FormControls from '../form-controls';

const controlsExperienceFormData = [
  {
    name: 'company',
    placeholder: 'Enter Company Name',
    label: 'Company Name',
    type: 'text',
  },
  {
    name: 'position',
    placeholder: 'Enter Position',
    label: 'Position',
    type: 'text',
  },
  {
    name: 'duration',
    placeholder: 'Enter Duration',
    label: 'Duration',
    type: 'text',
  },
  {
    name: 'location',
    placeholder: 'Enter Location',
    label: 'Location',
    type: 'text',
  },
  {
    name: 'jobprofile',
    placeholder: 'Enter Job Profile',
    label: 'Job Profile',
    type: 'text',
  },
  {
    name: 'details',
    placeholder: 'Enter Details',
    label: 'Details',
    type: 'text',
  }
]
export default function AdminExperienceView({experienceFormData, setExperienceFormData}) {

  return(
    <div className='w-full'>
        <div className='bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4'>

          <FormControls
            controlsFormData={controlsExperienceFormData}
            formData={experienceFormData}
            setFormData={setExperienceFormData}
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