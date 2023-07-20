import Section from './components/Section/Section'
import data from './assets/data.json'
const App = () => {
  return (
    <div>
      <div className='app-wrapper'>
        <h1>Accordion Title Here</h1>
        {data.map((el) => {
          return (
            <Section
              key={el.id}
              sectionTitle={el.title}
              sectionText={el.text}
              icon={'✔️'}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
