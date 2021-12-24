export default function IconHamburger({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-hamburger" viewBox="0 0 32 32"><path fill="{color}" d="M30.4,9.6H1.6c-0.5,0-0.9,0.1-1.2,0.4C0.1,10.3,0,10.7,0,11.2c0,0.5,0.1,0.9,0.4,1.2c0.3,0.3,0.7,0.4,1.2,0.4 h28.8c0.5,0,0.9-0.1,1.2-0.4c0.3-0.3,0.4-0.7,0.4-1.2c0-0.5-0.1-0.9-0.4-1.1C31.3,9.7,30.9,9.6,30.4,9.6z M1.6,3.2h28.8 c0.5,0,0.9-0.1,1.2-0.4C31.9,2.5,32,2.1,32,1.6c0-0.5-0.1-0.9-0.4-1.1C31.3,0.1,30.9,0,30.4,0H1.6C1.1,0,0.7,0.1,0.4,0.4 C0.1,0.7,0,1.1,0,1.6c0,0.5,0.1,0.9,0.4,1.2C0.7,3,1.1,3.2,1.6,3.2z M30.4,19.2H1.6c-0.5,0-0.9,0.1-1.2,0.4C0.1,19.9,0,20.3,0,20.8 c0,0.5,0.1,0.9,0.4,1.2c0.3,0.3,0.7,0.4,1.2,0.4h28.8c0.5,0,0.9-0.1,1.2-0.4c0.3-0.3,0.4-0.7,0.4-1.2c0-0.5-0.1-0.9-0.4-1.1 C31.3,19.4,30.9,19.2,30.4,19.2z" /></svg>
    )
}

IconHamburger.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}