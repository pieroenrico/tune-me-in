export default function IconArrowUp({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-arrow-up" viewBox="0 0 32 32"><path fill="{color}" d="M5.016,23.5l-1.516-1.617L16.001,8.5l12.5,13.383L26.992,23.5L16.001,11.742L5.016,23.5z" /></svg>
    )
}

IconArrowUp.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}