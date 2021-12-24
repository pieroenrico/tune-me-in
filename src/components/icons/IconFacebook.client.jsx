export default function IconFacebook({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-facebook" viewBox="0 0 32 32"><path fill="{color}" d="M18.222 11.556V8.91c0-1.194.264-1.799 2.118-1.799h2.326V2.667h-3.882c-4.757 0-6.326 2.181-6.326 5.924v2.965H9.333V16h3.125v13.333h5.764V16h3.917l.528-4.444h-4.444z" /></svg>
    )
}

IconFacebook.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}