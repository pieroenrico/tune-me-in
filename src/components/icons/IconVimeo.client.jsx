export default function IconVimeo({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-vimeo" viewBox="0 0 32 32"><path fill="{color}" d="M.343 10.902l1.438 1.926q1.999-1.487 2.413-1.487 1.584 0 2.949 5.046l1.194 4.521q.828 3.132 1.292 4.814 1.804 5.046 4.534 5.046 4.339 0 10.53-8.336 6.069-7.922 6.288-12.528v-.536q0-5.606-4.485-5.752h-.341q-6.02 0-8.287 7.385 1.316-.561 2.291-.561 2.072 0 2.072 2.145 0 .268-.024.561-.146 1.731-2.047 4.729-1.95 3.144-2.901 3.144-1.267 0-2.242-4.777-.293-1.121-1.243-7.239-.414-2.632-1.536-3.9-.975-1.097-2.437-1.121-.195 0-.414.024-1.536.146-4.558 2.803-1.56 1.462-4.485 4.095z" /></svg>
    )
}

IconVimeo.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}