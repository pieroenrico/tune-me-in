export default function IconArrowDown({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-arrow-down" viewBox="0 0 32 32"><path fill="{color}" d="M26.985,8.5l1.516,1.617L16.001,23.5l-12.5-13.383L5.009,8.5l10.992,11.758L26.985,8.5z" /></svg>
    )
}

IconArrowDown.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}