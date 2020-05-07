import React from 'react';
import logo from './logo.svg';
import './App.css';
import SCIMOAC from './components/MOAC';

const items = [
    {
        label: 'Pick me!',
        value: 'consent',
        name: 'consent',
    },
];

const items2 = [
    {
        label: 'Pick me!',
        value: 'consent',
        name: 'consent',
    },
    {
        label: 'Pick me too!',
        value: 'consent',
        name: 'consent',
    },
];

const items5 = [
    {
        label: 'Pick me!',
        value: 'consent',
        name: 'consent',
    },
    {
        label: 'Pick me too!',
        value: 'consent',
        name: 'consent',
    },
    {
        label: 'No Pick me!',
        value: 'consent',
        name: 'consent',
    },
    {
        label: 'Pick me!',
        value: 'consent',
        name: 'consent',
    },
    {
        label: 'Pick me!',
        value: 'consent',
        name: 'consent',
    },
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <SCIMOAC items={items5}></SCIMOAC>
            </header>
        </div>
    );
}

export default App;
