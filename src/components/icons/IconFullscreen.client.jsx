export default function IconFullscreen({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-fullscreen" viewBox="0 0 32 32"><path fill="{color}" d="M2.818,6.228h8.338V3.5H0.091v7.656h2.728V6.228z M2.818,25.772v-4.929H0.091V28.5h11.065v-2.728H2.818z M29.182,25.772 h-8.338V28.5h11.065v-7.656h-2.728V25.772z M29.182,6.228v4.929h2.728V3.5H20.844v2.728H29.182z" /></svg>
    )
}

IconFullscreen.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}