import styles from './FooBarComponent.module.css'

export function FooBarComponent() {
    return <>
        {/*Uncomment the next line to destroys everything*/}
        {/*<div className={styles.fooBarContainer}></div>*/}
        <div>
            <h1>Buttons with Overrides to 2 values</h1>
            <button className={'win-button'}>Win</button>
            <button className={'mega-win-button'}>Win</button>
            <button className={'ultra-win-button'}>Win</button>
            <button className={'fail-button'}>Fail</button>
            <button className={'mega-fail-button'}>Fail</button>
            <button className={'ultra-fail-button'}>Fail</button>
        </div>
    </>
}
