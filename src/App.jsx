// DO NOT DELETE
 
import './App.css'
import {Header} from './Header';
import {Description} from './Description';
 
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <html>
      <Header />
      <Description />
    </html>
  )
}

export default App;