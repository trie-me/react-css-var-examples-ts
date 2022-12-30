import {useState} from 'react'
import './App.css'
import './colors.module.css'
import {Foo} from "./components/FooComponent/FooComponent";
import {Baz} from "./components/BazComponent/BazComponent";
import {Bar} from "./components/BarComponent/BarComponent";
import {FooBarIt} from "./components/FooBarIt/FooBarIt";

function App() {
    return (
        <div className="App">
            <h1>Control</h1>
            <button className={'win-button'}>Win</button>
            <button className={'mega-win-button'}>Win</button>
            <button className={'ultra-win-button'}>Win</button>
            <button className={'fail-button'}>Fail</button>
            <button className={'mega-fail-button'}>Fail</button>
            <button className={'ultra-fail-button'}>Fail</button>
            <Foo></Foo>
            <Bar></Bar>
            <Baz></Baz>
            <FooBarIt></FooBarIt>
        </div>
    )
}

export default App
