export default function IconPin({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-pin" viewBox="0 0 32 32"><path fill="{color}" d="M4 12a12 12 0 0 1 24 0c0 8-12 20-12 20S4 20 4 12m7 0a5 5 0 0 0 10 0 5 5 0 0 0-10 0z" /></svg>
    )
}

IconPin.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}