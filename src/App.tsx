import './App.css'

function App() {

  return (
    <div className="container flex items-center">
      <div className="card">
        <h1 className={'text-center'}>{'0'}</h1>
        <div className={'grid grid-cols-2'}>
          <button className={'button'} onClick={() => {}}>{"Increment"}</button>
          <button className={'button'} onClick={() => {}}>{"Decrement"}</button>
        </div>
      </div>
    </div>
  )
}

export default App
