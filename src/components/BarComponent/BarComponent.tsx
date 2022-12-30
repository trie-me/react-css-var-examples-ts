type CssVariableIndex = { [key: string]: string };
// abusive style computation to force assignment
const styles: CssVariableIndex = ([['--bg-success-100', 'blue']] as Array<[string, string]>)
    .reduce((acc, [c, v]) => {
        acc[c] = v;
        return acc;
    }, {} as CssVariableIndex);

const style = <style>
    .bazComponent{

}
</style>
export function Bar() {

    return <div style={styles}>
        <h1>Buttons with Overrides to 1 values</h1>
        <button className={'win-button'}>Win</button>
        <button className={'mega-win-button'}>Win</button>
        <button className={'ultra-win-button'}>Win</button>
        <button className={'fail-button'}>Fail</button>
        <button className={'mega-fail-button'}>Fail</button>
        <button className={'ultra-fail-button'}>Fail</button>
    </div>
}
