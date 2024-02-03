import './App.css'
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';


function App() {
  return (
    <> 
      <div className="wrapper">
        <Header/>
      <main className="content">
        <h1 className="title">The best pizza. <br />
        <span className="text-yellow">Straight out of the oven, straight to you.</span>
      </h1>
        <p className="sub-title">👋 Welcome! Please start by telling us your name:</p>
      <Form/>
      </main>
        
    </div>
    </>
  )
}

export default App
