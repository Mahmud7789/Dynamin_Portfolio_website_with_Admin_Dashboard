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

export default function AdminView() {

  const [menuOpen, setMenuOpen] = useState(false);
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
      component: <AdminContactView />,
    },
  ]
  return (
  <div className='border-b border-gray-400'>
    
    {/* Fixed Navbar */}
    <nav className='fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-300'>
      
      <div className='flex items-center justify-between px-4 sm:px-8 h-16'>
        
        {/* Logo / Title (optional) */}
        <div className='font-semibold text-lg'>Golam Mahmud</div>

        {/* Desktop Menu */}
        <div className='hidden sm:flex space-x-6'>
          {menueItems.map((item) => (
            <button
              key={item.id}
              type='button'
              onClick={() => setActiveTab(item.id)}
              className={`whitespace-nowrap py-5 px-3 border-b-2 font-medium transition-all duration-300
                ${
                  activeTab === item.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
            >
              {item.lable}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className='sm:hidden flex flex-col space-y-1'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className='w-6 h-0.5 bg-gray-700'></span>
          <span className='w-6 h-0.5 bg-gray-700'></span>
          <span className='w-6 h-0.5 bg-gray-700'></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='sm:hidden flex flex-col px-4 pb-4 space-y-2 bg-white border-t border-gray-200 animate-fadeIn'>
          {menueItems.map((item) => (
            <button
              key={item.id}
              type='button'
              onClick={() => {
                setActiveTab(item.id)
                setMenuOpen(false)
              }}
              className={`text-left py-2 px-2 rounded-md transition-all duration-300
                ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              {item.lable}
            </button>
          ))}
        </div>
      )}
    </nav>

    {/* Content spacing for fixed navbar */}
    <div className='mt-15 sm:mt-16 p-6 sm:p-10 transition-all duration-300 ease-in-out'>
      {menueItems.find(item => item.id === activeTab)?.component}
    </div>

  </div>
)


}