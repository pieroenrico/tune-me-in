export default function IconBubble({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-bubble" viewBox="0 0 32 32"><path fill="{color}" d="M16,2.101c-7.166,0-15.5,4.44-15.5,12.299c0,3.268,1.659,6.438,4.561,8.73c-0.472,1.217-1.586,3.276-4.03,4.743 c-0.419,0.251-0.622,0.756-0.491,1.226c0.131,0.472,0.563,0.801,1.052,0.801c1.694,0,3.782-0.611,6.204-1.816 c1.488-0.74,2.749-1.532,3.428-1.979C22.167,28.707,31.5,22.249,31.5,14.399C31.5,8.791,26.126,2.101,16,2.101z M7.397,23.009 c0.118-0.44-0.053-0.912-0.427-1.175c-2.725-1.914-4.288-4.625-4.288-7.435C2.683,8.821,8.657,4.283,16,4.283 c7.344,0,13.156,4.311,13.318,10.116c0.162,5.819-7.693,12.194-17.99,9.473c-0.39-0.104-0.736,0.024-0.919,0.149 c-1.554,1.069-3.308,2.036-4.876,2.698C6.733,25.133,7.229,23.644,7.397,23.009z" /></svg>
    )
}

IconBubble.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}