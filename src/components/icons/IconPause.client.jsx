export default function IconPause({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-pause" viewBox="0 0 32 32"><path fill="{color}" d="M27.637,32h-5.818V0h5.818V32L27.637,32z M10.182,32H4.363V0h5.818V32z" /></svg>
    )
}

IconPause.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}