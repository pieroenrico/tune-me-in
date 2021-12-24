export default function IconGoogle({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-google" viewBox="0 0 32 32"><path fill="{color}" d="M20.383,14.498c0.836,3.064-0.664,11.986-9.897,11.986C4.691,26.484,0,21.793,0,16S4.691,5.516,10.485,5.516 c2.832,0,5.191,1.029,7.022,2.746l-2.846,2.732c-0.772-0.744-2.132-1.617-4.177-1.617c-3.576,0-6.494,2.961-6.494,6.623 s2.918,6.623,6.494,6.623c4.147,0,5.707-2.99,5.95-4.521h-5.95v-3.604H20.383L20.383,14.498z M28.957,14.85v-3.044h-3.059v3.044 h-3.043v3.058h3.043v3.044h3.059v-3.044H32V14.85H28.957L28.957,14.85z" /></svg>
    )
}

IconGoogle.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}