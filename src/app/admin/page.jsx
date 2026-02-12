'use client';
import AdminAboutView from '@/components/admin-view/about';
import AdminContactView from '@/components/admin-view/contact';
import AdminEducationView from '@/components/admin-view/education';
import AdminExperienceView from '@/components/admin-view/experience';
import AdminHomeView from '@/components/admin-view/home';
import AdminProjectView from '@/components/admin-view/project';
import React, { useState } from 'react';

const initialHomeFormData = {
  heading: "",
  summary: "",
}

const initialAboutFormData = {
  aboutme: "",
  noofprojects: "",
  noofclients: "",
  yearofexperience: "",
  skills: "",
}

const initialExperienceFormData = {
  company: "",
  position: "",
  duration: "",
  details: "",
  location: "",
  jobprofile: "",
}

const initialEducationFormData = {
  institution: "",
  degree: "",
  fieldofstudy: "",
  startyear: "",
  endyear: "",
  grade: "",
};

const initialProjectFormData = {
  name: "",
  technologies: "",
  description: "",
  website: "",
  github: ""
}

export default function AdminView(){

  const [activeTab, setActiveTab] = useState('home');
  const [homeFormData, setHomeFormData] = useState(initialHomeFormData);
  const [aboutFormData, setAboutFormData] = useState(initialAboutFormData);
  const [experienceFormData, setExperienceFormData] = useState(initialExperienceFormData);
  const [educationFormData, setEducationFormData] = useState(initialEducationFormData);
  const [projectFormData, setProjectFormData] = useState(initialProjectFormData);

  const menueItems = [
    {
      id: 'home',
      lable: 'Home',
      component: <AdminHomeView 
        homeFormData={homeFormData}
        setHomeFormData={setHomeFormData}
      />,
    },
    {
      id: 'about',
      lable: 'About',
      component: <AdminAboutView
      aboutFormData={aboutFormData}
      setAboutFormData={setAboutFormData}
      />,
    },
    {
      id: 'experience',
      lable: 'Experience',
      component: <AdminExperienceView
      experienceFormData={experienceFormData}
      setExperienceFormData={setExperienceFormData}
      />,
    },
    {
      id: 'education',
      lable: 'Education',
      component: <AdminEducationView
      educationFormData={educationFormData}
      setEducationFormData={setEducationFormData}
      />,
    },
    {
      id: 'project',
      lable: 'Project',
      component: <AdminProjectView
      projectFormData={projectFormData}
      setProjectFormData={setProjectFormData}
      />,
    },
    {
      id: 'contact',
      lable: 'Contact',
      component: <AdminContactView/>,
    },
  ]
  return (
    <div className='border-b border-gray-400'>
      <nav className='-mb-0.5 flex justify-center space-x-6' role='tablist'>
        {menueItems.map((item) => (
          <button key={item.id}
          type='button' 
          className='whitespace-nowrap py-6 px-3 border-b-2 border-transparent font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
          onClick={() => setActiveTab(item.id)}>

            {item.lable}

          </button>
        ))}
      </nav>
      <div className='mt-10 p-10'>
        {
          menueItems.find( item => item.id === activeTab )?.component
        }
      </div>

    </div>
  )
}