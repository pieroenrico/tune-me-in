export default function IconZoom({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-zoom" viewBox="0 0 32 32"><path fill="{color}" d="M31.202,29.293l-8.704-8.703c1.671-2.087,2.677-4.729,2.677-7.604c0-6.721-5.468-12.188-12.189-12.188 c-6.721,0-12.188,5.467-12.188,12.188c0,6.722,5.468,12.189,12.189,12.189c2.875,0,5.516-1.007,7.602-2.678l8.704,8.704 L31.202,29.293z M12.987,22.475c-5.232,0-9.489-4.256-9.489-9.489c0-5.232,4.256-9.488,9.489-9.488c5.234,0,9.49,4.256,9.49,9.488 C22.477,18.219,18.219,22.475,12.987,22.475z M18.06,14.438h-3.604v3.604h-3v-3.604H7.852v-3h3.604V7.833h3v3.604h3.604V14.438z" /></svg>
    )
}

IconZoom.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}