export default function IconTrash({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-trash" viewBox="0 0 32 32"><path fill="{color}" d="M22.4,6.4V3.2C22.4,1.4,21,0,19.2,0H9.6C7.8,0,6.4,1.4,6.4,3.2v3.2H0v3.2h3.2v19.2c0,1.8,1.4,3.2,3.2,3.2h16 c1.8,0,3.2-1.4,3.2-3.2V9.6h3.2V6.4H22.4z M9.6,3.2h9.6v3.2H9.6V3.2z M6.4,28.8V9.6H8h14.4v19.2C22.4,28.8,6.4,28.8,6.4,28.8z" /> <rect x="9.6" y="12.8" className="st0" width="3.2" height="12.8" /> <rect x="16" y="12.8" className="st0" width="3.2" height="12.8" /></svg>
    )
}

IconTrash.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}