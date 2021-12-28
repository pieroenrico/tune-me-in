export default function IconThumbsDown({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-thumbs-down" viewBox="0 0 32 32"><path fill="{color}" d="M30.365,14.075c0.768-1.466,0.252-4.699-1.346-6.059c0.113-0.484-0.199-3.828-2.318-4.987C26.488,2.158,25.352,0,21.982,0 c-4.416,0-5.773,0.727-7.211,1.495c-1.067,0.571-2.171,1.162-5.022,1.54c-0.45-0.897-1.36-1.466-2.378-1.466H2.664 C1.195,1.568,0,2.764,0,4.232v14.122c0,1.47,1.195,2.663,2.664,2.663h4.707c0.93,0,1.795-0.494,2.275-1.279 c2.867,1.018,5.678,2.691,7.94,4.729c2.426,2.188,3.973,4.587,4.242,6.587C21.902,31.593,22.367,32,22.914,32 c1.074,0,2.629-0.531,3.479-2.029c1.133-2.005,0.652-5.015-1.43-8.954h3.588c0.959,0,1.787-0.43,2.27-1.251 C31.803,18.094,31.43,15.625,30.365,14.075z M28.963,18.606c-0.088,0.174-0.207,0.223-0.412,0.223h-5.463 c-0.785,0-1.404,0.887-0.939,1.656c1.424,2.348,2.27,4.354,2.551,5.943c0.23,1.318,0.104,2.603-0.951,3.165 c-0.648-2.235-2.268-4.562-4.697-6.754c-2.566-2.312-5.759-4.183-9.016-5.285V5.206c3.251-0.435,4.585-1.147,5.767-1.778 c1.241-0.665,2.315-1.237,6.18-1.237c1.266,0,2.631,0.532,2.631,1.7c0,0.604,0.492,1.064,1.094,1.094 c0.77,0.454,1.113,2.047,1.139,2.744c-0.543,0.304-0.605,1.834,0.695,1.915c0.498,0.295,1.248,2.2,0.891,3.402 c-1.252,0.144-1.471,1.956,0.027,2.187C29.102,15.719,29.279,17.977,28.963,18.606z M2.19,4.232c0-0.26,0.212-0.474,0.474-0.474 h4.707c0.262,0,0.475,0.213,0.475,0.474v14.122c0,0.263-0.213,0.476-0.475,0.476H2.664c-0.262,0-0.474-0.213-0.474-0.476V4.232z" /></svg>
    )
}

IconThumbsDown.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}