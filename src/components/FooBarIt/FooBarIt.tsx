import {FooBarComponent} from "../FooBarComponent/FooBarComponent";
import {useState} from "react";


export function FooBarIt() {
    const [state, setState] = useState(false);
    const fooBar = state ? <FooBarComponent></FooBarComponent> : <h1>
        Not yet foobar'd.
    </h1>;
    return <div>
        {fooBar}
        <br/>
        <button onClick={() => setState(!state)}>Foo it good</button>
    </div>
}
