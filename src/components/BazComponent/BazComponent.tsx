export function Baz() {

    return <>
        {/** This renders, but doesn't do anything **/}
        <style>
            {'.bazComponent:\{ \n--bg-success-100: red\n\}'}
        </style>
        {/**
         // Classic mode doesn't work under TS
        <style>
            .bazComponent{
                --bg-success-100: red;
            }
        </style>
        **/}
        <div className={'bazComponent'}>
            <h1>Override Red, but fail because react</h1>
            <button className={'win-button'}>Win</button>
            <button className={'mega-win-button'}>Win</button>
            <button className={'ultra-win-button'}>Win</button>
            <button className={'fail-button'}>Fail</button>
            <button className={'mega-fail-button'}>Fail</button>
            <button className={'ultra-fail-button'}>Fail</button>
        </div>
    </>
}
