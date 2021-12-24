export default function IconLinkedin({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-linkedin" viewBox="0 0 32 32"><path fill="{color}" d="M10.132,26.622H5.726V12.438h4.406V26.622z M7.926,10.503c-1.408,0-2.551-1.166-2.551-2.574c0-1.41,1.143-2.552,2.551-2.552 c1.409,0,2.551,1.142,2.551,2.552C10.478,9.337,9.335,10.503,7.926,10.503z M26.619,26.622h-4.396v-6.903 c0-1.647-0.034-3.756-2.289-3.756c-2.291,0-2.643,1.788-2.643,3.637v7.022h-4.4V12.438h4.225v1.935h0.061 c0.588-1.114,2.024-2.291,4.169-2.291c4.458,0,5.278,2.935,5.278,6.748v7.791H26.619L26.619,26.622z" /></svg>
    )
}

IconLinkedin.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}