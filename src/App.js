import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="appTitle">ImageBox</h1>
                <p className="AppSubtitle">A simple image search engine web app</p>
            </header>
            <SearchBar />
        </div>
    )
}

export default App
