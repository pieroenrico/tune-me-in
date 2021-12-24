export default function IconQuoteClose({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-quote-close" viewBox="0 0 32 32"><path fill="{color}" d="M24,15.46h-4.8V2.659H32v9.687c0,10.581-4.267,16.245-12.8,16.995V24.54C23.094,23.281,24.125,20.406,24,15.46z M4.799,15.46H0V2.659h12.8v9.687c0,10.581-4.267,16.245-12.8,16.995V24.54C3.894,23.281,4.925,20.406,4.799,15.46z" /></svg>
    )
}

IconQuoteClose.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}