export default function IconSnapchat({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-snapchat" viewBox="0 0 32 32"><path fill="{color}" d="M23.4,7.1c.8,2,.4,4.4.3,6.5.8.4,1.5-.4,2.3-.4s1.5.5,1.5,1.2-4.7,1.3-3.4,3.6a8.3,8.3,0,0,0,5.8,4.8c2,1.3-2.5,2.4-3.4,2.4s-.1,1.9-1,1.9a12,12,0,0,0-3.3-.2c-2.1.4-2.8,2.6-6.2,2.6s-4.1-2.2-6.2-2.6a12.2,12.2,0,0,0-3.3.2c-1,0-.7-1.3-1-1.9S.1,24.1,2.1,22.8A8.3,8.3,0,0,0,7.9,18c1.3-2.3-3.3-1.8-3.4-3.6s.8-1.1,1.5-1.1,1.5.7,2.3.3c-.1-2.1-.5-4.5.3-6.5C11.2.9,20.9,1,23.4,7.1Z" /></svg>
    )
}

IconSnapchat.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}