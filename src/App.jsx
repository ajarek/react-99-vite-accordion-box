import Accordion from './components/Accordion/Accordion'
import data from './assets/data.json'

const App = () => {
  return (
    <div>
      <h1>Accordion Title Here</h1>
      <Accordion sections={data} />
    </div>
  )
}

export default App
