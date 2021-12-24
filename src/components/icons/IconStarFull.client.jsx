export default function IconStarFull({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden={ariaHidden} tabIndex={tabIndex} role={role} className="icon icon-star-full" viewBox="0 0 32 32"><path fill={color} d="M16,0l-4.9,10L0,11.6l8,7.8l-1.9,11l9.9-5.2l9.9,5.2l-1.9-11l8-7.8L20.9,10L16,0z" /></svg>
    )
}

IconStarFull.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}