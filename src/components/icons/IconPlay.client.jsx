export default function IconPlay({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-play" viewBox="0 0 32 32"><path fill="{color}" d="M6.752,0.055l21.904,15.944L6.754,31.945" /></svg>
    )
}

IconPlay.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}