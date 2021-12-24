export default function IconEnvelope({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-envelope" viewBox="0 0 32 32"><path fill="{color}" d="M29.061,4.593H2.939C1.318,4.593,0,5.912,0,7.533v16.934c0,1.621,1.318,2.939,2.939,2.939h26.121 c1.621,0,2.939-1.318,2.939-2.939V7.533C32,5.912,30.682,4.593,29.061,4.593z M2.116,8.59l11.756,9.123l0.007,0.006 c0.586,0.391,1.35,0.605,2.153,0.605c0.803,0,1.567-0.215,2.152-0.605l0.004-0.002L29.884,8.59v15.876 c0,0.455-0.37,0.824-0.823,0.824H2.939c-0.453,0-0.823-0.369-0.823-0.824V8.59z M17.007,15.959c-0.241,0.16-0.597,0.251-0.975,0.251 c-0.379,0-0.734-0.092-0.976-0.251L3.119,6.723C4.554,6.719,10.333,6.717,16,6.717c5.669,0,11.45,0.002,12.883,0.006L17.007,15.959z" /></svg>
    )
}

IconEnvelope.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}