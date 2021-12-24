export default function IconShare({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-share" viewBox="0 0 32 32"><path fill="{color}" d="M28,12.4V29a2.9,2.9,0,0,1-2.9,3H6.9A2.9,2.9,0,0,1,4,29V12.4a2.9,2.9,0,0,1,2.9-3h6.3v2H6.9a.9.9,0,0,0-.9,1V29a.9.9,0,0,0,.9.9H25.1A.9.9,0,0,0,26,29V12.4a.9.9,0,0,0-.9-1H18.9v-2h6.2A2.9,2.9,0,0,1,28,12.4ZM15,3.9V20.7h2V3.9l3.4,3.4,1.5-1.4L16,0,10.1,5.9l1.5,1.4Z" /></svg>
    )
}

IconShare.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}