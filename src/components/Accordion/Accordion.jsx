import React, { useState } from 'react'
import './Accordion.css'

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleSection = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className='accordion'>
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`accordion-section ${
            activeIndex === index ? 'active' : ''
          }`}
          onClick={() => toggleSection(index)}
        >
          <div className='header'>
            <div className='accordion-title'>{section.title}</div>
            <button className='toggle-button'>
              {activeIndex === index ? '❌' : '✔️'}
            </button>
          </div>
          {activeIndex === index && (
            <div className='accordion-content'>{section.text}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
