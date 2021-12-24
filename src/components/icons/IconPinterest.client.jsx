export default function IconPinterest({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-pinterest" viewBox="0 0 32 32"><path fill="{color}" d="M16.71,1.209c-6.08,0-12.09,4.055-12.09,10.616c0,4.172,2.346,6.543,3.769,6.543c0.586,0,0.924-1.635,0.924-2.098 c0-0.552-1.406-1.725-1.406-4.019c0-4.765,3.627-8.143,8.322-8.143c4.036,0,7.024,2.292,7.024,6.508c0,3.147-1.264,9.05-5.353,9.05 c-1.476,0-2.739-1.066-2.739-2.596c0-2.24,1.566-4.41,1.566-6.721c0-3.923-5.565-3.212-5.565,1.529c0,0.996,0.124,2.098,0.568,3.005 c-0.818,3.521-2.49,8.767-2.49,12.394c0,1.121,0.161,2.223,0.267,3.342c0.201,0.227,0.101,0.204,0.409,0.091 c2.988-4.09,2.881-4.889,4.232-10.243c0.728,1.388,2.613,2.136,4.106,2.136c6.294,0,9.121-6.136,9.121-11.665 C27.379,5.05,22.293,1.209,16.71,1.209z" /></svg>
    )
}

IconPinterest.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}