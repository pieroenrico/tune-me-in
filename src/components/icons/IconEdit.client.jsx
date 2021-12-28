export default function IconEdit({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-edit" viewBox="0 0 32 32"><path fill="{color}" d="M31.119,8.877l-2.882,2.882c-0.294,0.293-0.769,0.293-1.062,0L20.238,4.82c-0.294-0.293-0.294-0.769,0-1.062l2.881-2.881 c1.169-1.169,3.069-1.169,4.244,0l3.757,3.756C32.294,5.802,32.294,7.702,31.119,8.877z M17.762,6.233L1.349,22.646L0.024,30.24 c-0.181,1.025,0.713,1.913,1.738,1.737l7.594-1.331l16.413-16.413c0.294-0.294,0.294-0.769,0-1.062l-6.938-6.938 C18.531,5.939,18.056,5.939,17.762,6.233L17.762,6.233z M7.756,21.24c-0.344-0.344-0.344-0.894,0-1.237l9.625-9.626 c0.344-0.344,0.894-0.344,1.237,0s0.344,0.894,0,1.237L8.993,21.24C8.649,21.584,8.099,21.584,7.756,21.24L7.756,21.24z M5.499,26.496h3v2.27l-4.031,0.706l-1.944-1.944l0.707-4.031h2.269V26.496z" /></svg>
    )
}

IconEdit.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}