import styles from './FooComponent.module.css'
export function Foo() {
    return <div className={styles.fooContainer}>
        <h1>Buttons with Overrides to 2 values</h1>
        <button className={'win-button'}>Win</button>
        <button className={'mega-win-button'}>Win</button>
        <button className={'ultra-win-button'}>Win</button>
        <button className={'fail-button'}>Fail</button>
        <button className={'mega-fail-button'}>Fail</button>
        <button className={'ultra-fail-button'}>Fail</button>
    </div>
}
