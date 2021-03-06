export default function IconUser({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-user" viewBox="0 0 32 32"><path fill="{color}" d="M16,0C7.2,0,0,7.2,0,16c0,4.6,2,9.1,5.6,12.1l0.2,0.2c0.3,0.2,0.6,0.4,0.9,0.7C6.7,29,6.8,29,6.9,29.1l0.2,0.1 C9.7,31,12.8,32,16,32c0,0,0,0,0,0c3.2,0,6.3-1,8.9-2.7c0.1-0.1,0.2-0.1,0.3-0.2c0.1,0,0.1-0.1,0.2-0.2c0.1-0.1,0.3-0.2,0.4-0.3 c0.2-0.1,0.3-0.2,0.5-0.4l0.3-0.2V28C30,24.9,32,20.6,32,16C32,7.2,24.8,0,16,0z M20.7,13.2c0,0.7-0.1,1.2-0.4,1.8 c-0.2,0.6-0.6,1.1-1,1.5c-0.4,0.4-0.9,0.8-1.5,1c-1.2,0.5-2.5,0.5-3.6,0c-0.6-0.2-1.1-0.6-1.5-1c-0.4-0.4-0.8-0.9-1-1.5l0,0 c-0.2-0.6-0.4-1.2-0.4-1.8c0-0.7,0.1-1.3,0.4-1.8c0.3-0.6,0.6-1.1,1-1.5c0.4-0.4,0.9-0.8,1.5-1c0.5-0.2,1.1-0.4,1.8-0.4 c0.7,0,1.2,0.1,1.8,0.4c0.6,0.3,1.1,0.6,1.5,1c0.4,0.4,0.8,0.9,1,1.5C20.5,12,20.7,12.6,20.7,13.2z M8.7,26.9c0-0.1,0.1-0.3,0.1-0.4 c0.2-0.6,0.4-1.2,0.8-1.8c0.3-0.6,0.7-1.1,1.2-1.5c0.4-0.4,1-0.8,1.5-1.2c0.5-0.3,1.1-0.5,1.8-0.7c0.6-0.2,1.3-0.2,2-0.3 c2,0,3.9,0.7,5.3,2.1c0.7,0.7,1.2,1.5,1.6,2.3c0.2,0.4,0.3,0.9,0.4,1.4c-2.2,1.4-4.7,2.2-7.3,2.2C13.4,29.1,10.9,28.3,8.7,26.9z M21.1,19.1c0.1-0.1,0.2-0.2,0.3-0.3c0.5-0.5,0.9-1,1.3-1.6c0.7-1.2,1.1-2.6,1.1-4c0-1.1-0.2-2.1-0.6-3c-0.4-0.9-1-1.8-1.7-2.5 C20.8,7,19.9,6.4,19,6c-1-0.4-2-0.6-3-0.6c-1,0-2.1,0.2-3,0.6c-0.9,0.4-1.8,1-2.5,1.7c-0.7,0.7-1.3,1.5-1.7,2.5c-0.4,1-0.6,2-0.6,3 c0,0.7,0.1,1.4,0.3,2.1c0.2,0.7,0.5,1.3,0.8,1.9c0.3,0.5,0.7,1,1.3,1.6c0.1,0.1,0.2,0.2,0.3,0.3c-0.5,0.3-0.9,0.6-1.4,0.9 c-0.8,0.6-1.6,1.4-2.2,2.3c-0.5,0.7-0.9,1.5-1.2,2.2c-2.1-2.4-3.3-5.4-3.3-8.6C2.9,8.8,8.8,2.9,16,2.9S29.1,8.8,29.1,16 c0,3.2-1.2,6.2-3.2,8.6c-0.3-0.8-0.7-1.5-1.2-2.2c-0.6-0.9-1.4-1.7-2.2-2.3C22,19.7,21.6,19.4,21.1,19.1z" /></svg>
    )
}

IconUser.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}