import '../App.css';

import logo from '../logo.gif';

export default function HomeProfile() {
  return (
    <>
      <header className="App-header" >
        <p>MY NAME HERE</p>
        <p className="App-text">
          <img src={logo} className="App-logo" alt="logo" />
          This is where all my bio information will be placed for my portfolio
        </p>
      </header>
    </>
  )
}