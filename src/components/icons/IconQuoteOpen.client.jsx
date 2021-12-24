export default function IconQuoteOpen({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-quote-open" viewBox="0 0 32 32"><path fill="{color}" d="M8,16.54H12.8v12.801H0v-9.687C0,9.073,4.267,3.409,12.8,2.659V7.46C8.906,8.719,7.875,11.594,8,16.54z M27.201,16.54H32 v12.801H19.2v-9.687C19.2,9.073,23.467,3.409,32,2.659V7.46C28.106,8.719,27.075,11.594,27.201,16.54z" /></svg>
    )
}

IconQuoteOpen.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}