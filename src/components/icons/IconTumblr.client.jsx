export default function IconTumblr({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-tumblr" viewBox="0 0 32 32"><path fill="{color}" d="M6.997 13.822h3.022v10.237q0 1.852.414 3.047.463 1.097 1.438 1.95.951.877 2.511 1.438 1.487.512 3.388.512 1.657 0 3.096-.366 1.243-.244 3.242-1.194v-4.582q-2.023 1.389-4.192 1.389-1.072 0-2.145-.561-.634-.414-.951-1.146-.244-.804-.244-3.242v-7.483h6.581V9.239h-6.581V1.902h-3.949q-.195 2.072-.951 3.681-.756 1.56-1.901 2.486Q8.581 9.19 6.996 9.678v4.144z" /></svg>
    )
}

IconTumblr.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}