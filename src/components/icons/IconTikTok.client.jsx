export default function IconTikTok({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" focusable="{{iconFocusable}}" tabIndex="{tabIndex}" role="{role}" className="icon icon-tiktok" viewBox="0 0 32 32"><path fill="{color}" d="M21.6,1.5c.5,4.1,2.8,6.6,6.8,6.9V13c-2.3.2-4.3-.6-6.7-2v8.6C21.7,30.6,9.8,34,5,26.2c-3.1-5.1-1.2-14,8.7-14.3v4.9l-2.3.5c-2.2.8-3.5,2.2-3.1,4.6.6,4.7,9.3,6.1,8.6-3.1V1.6h4.7Z" /></svg>
    )
}

IconTikTok.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}