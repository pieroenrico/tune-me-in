export default function IconThumbsUp({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-thumbs-up" viewBox="0 0 32 32"><path fill="{color}" d="M30.82,12.234c-0.482-0.821-1.311-1.251-2.27-1.251h-3.588c2.082-3.939,2.562-6.949,1.43-8.954 C25.543,0.531,23.988,0,22.914,0c-0.547,0-1.012,0.407-1.086,0.947c-0.27,2-1.816,4.398-4.242,6.587 c-2.262,2.037-5.073,3.711-7.94,4.729c-0.48-0.785-1.346-1.279-2.275-1.279H2.664C1.195,10.983,0,12.177,0,13.646v14.121 c0,1.469,1.195,2.664,2.664,2.664h4.707c1.019,0,1.928-0.568,2.378-1.467c2.851,0.379,3.955,0.97,5.022,1.541 C16.209,31.273,17.566,32,21.982,32c3.369,0,4.506-2.158,4.719-3.028c2.119-1.159,2.432-4.503,2.318-4.987 c1.598-1.359,2.113-4.594,1.346-6.059C31.43,16.375,31.803,13.906,30.82,12.234z M28.459,16.77c-1.498,0.23-1.279,2.043-0.027,2.186 c0.357,1.202-0.393,3.107-0.891,3.402c-1.301,0.08-1.238,1.611-0.695,1.914c-0.025,0.697-0.369,2.291-1.139,2.744 c-0.602,0.029-1.094,0.49-1.094,1.094c0,1.169-1.365,1.701-2.631,1.701c-3.865,0-4.939-0.573-6.18-1.238 c-1.182-0.631-2.516-1.344-5.767-1.777v-12.35c3.257-1.103,6.45-2.974,9.016-5.285c2.43-2.191,4.049-4.519,4.697-6.754 c1.055,0.562,1.182,1.847,0.951,3.165c-0.281,1.589-1.127,3.596-2.551,5.943c-0.465,0.77,0.154,1.656,0.939,1.656h5.463 c0.205,0,0.324,0.049,0.412,0.223C29.279,14.023,29.102,16.281,28.459,16.77z M2.19,13.646c0-0.263,0.212-0.476,0.474-0.476h4.707 c0.262,0,0.475,0.213,0.475,0.476v14.121c0,0.261-0.213,0.475-0.475,0.475H2.664c-0.262,0-0.474-0.214-0.474-0.475V13.646z" /></svg>
    )
}

IconThumbsUp.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}