export default function IconMinus({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-minus" viewBox="0 0 32 32"><path fill="{color}" d="M32,14.477v3.047H0v-3.047H32z" /></svg>
    )
}

IconMinus.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}