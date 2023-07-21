import Section from './components/Section/Section'
import data from './assets/data.json'
import { useEffect, useState } from 'react'
const App = () => {
  const [newData, setNewData]=useState(data)
  const handleButton=(id)=>{
     const item =newData.find(el=>el.id===id)
     
  }
  return (
    <div>
      <div className='app-wrapper'>
        <h1>Accordion Title Here</h1>
        {newData.map((el) => {
          return (
            <Section
              key={el.id}
              sectionTitle={el.title}
              sectionText={el.active?el.text:null}
              icon={el.active?'✔️':'❌'}
              onClick={()=>handleButton(el.id)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
