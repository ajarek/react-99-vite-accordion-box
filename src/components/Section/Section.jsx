import './Section.css'

const Section = ({sectionTitle,sectionText, onClick, icon}) => {
  return (
    <div className='section'>
      <div className="header">
        <div className="section-title">{sectionTitle}</div>
        <button className="toggle-button" onClick={onClick}>{icon}</button>   
        </div>
      <div className="text">{sectionText}</div>
    </div>
  )
}

export default Section