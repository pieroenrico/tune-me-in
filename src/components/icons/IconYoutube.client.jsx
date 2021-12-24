export default function IconYoutube({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-youtube" viewBox="0 0 32 32"><path fill="{color}" d="M24.728,5.078H7.48c-2.003,0-3.627,1.624-3.627,3.627v14.052c0,2.006,1.624,3.629,3.627,3.629h17.247 c2.004,0,3.627-1.623,3.627-3.629V8.706C28.354,6.702,26.731,5.078,24.728,5.078z M12.735,20.882v-10.3l8.921,5.15L12.735,20.882z" /></svg>
    )
}

IconYoutube.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}