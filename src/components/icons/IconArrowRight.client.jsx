export default function IconArrowRight({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden={ariaHidden} tabIndex={tabIndex} role={role} className="icon icon-arrow-right focus:outline-none" viewBox="0 0 32 32"><path fill={color} d="M8.5,5.015L10.117,3.5L23.5,16L10.117,28.5L8.5,26.991L20.258,16L8.5,5.015z" /></svg>
    )
}

IconArrowRight.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}