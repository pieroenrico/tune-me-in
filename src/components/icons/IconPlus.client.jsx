export default function IconPlus({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-plus" viewBox="0 0 32 32"><path fill="{color}" d="M32,13.7H18.3V0h-4.6v13.7H0v4.6h13.7V32h4.6V18.3H32V13.7z" /></svg>
    )
}

IconPlus.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}