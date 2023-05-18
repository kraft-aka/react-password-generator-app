import './App.css'
import GeneratePassword from './components/GeneratePassword'


function App() {

  return (
    <div className='d-flex flex-column justify-content-center align-items-center mb-3 p-5'>
     <h1 className='text-lg mb-3'>Generate Random Password</h1>
    <GeneratePassword />
    </div>
  )
}

export default App
