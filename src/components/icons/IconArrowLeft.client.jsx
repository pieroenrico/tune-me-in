export default function IconArrowLeft({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden={ariaHidden} tabIndex={tabIndex} role={role} className="icon icon-arrow-left focus:outline-none" viewBox="0 0 32 32"><path fill={color} d="M23.5,26.984L21.883,28.5L8.5,16L21.883,3.5L23.5,5.009L11.742,16L23.5,26.984z" /></svg>
    )
}

IconArrowLeft.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}