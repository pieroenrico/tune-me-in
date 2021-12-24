export default function IconStarEmpty({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-star-empty" viewBox="0 0 32 32"><path fill="{color}" d="M16,4.9l3,6.1l0.5,1.1l1.1,0.2l6.7,1l-4.8,4.7l-0.8,0.8l0.2,1.1l1.1,6.7l-6-3.1L16,22.8l-1,0.5l-6,3.1l1.1-6.7 l0.2-1.1l-0.8-0.8l-4.8-4.7l6.7-1l1.1-0.2l0.5-1.1L16,4.9z M16,0l-4.9,10L0,11.6l8,7.8l-1.9,11l9.9-5.2l9.9,5.2l-1.9-11l8-7.8 L20.9,10L16,0z" /></svg>
    )
}

IconStarEmpty.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}