export default function IconRss({ ariaHidden, tabIndex, role, color }) {
    return (
        <svg aria-hidden="{ariaHidden}" tabIndex="{tabIndex}" role="{role}" className="icon icon-rss" viewBox="0 0 32 32"><path fill="{color}" d="M9.445 26.538a3.983 3.983 0 1 1-7.965 0 3.983 3.983 0 0 1 7.965 0zM20.73 30.52h-5.642c0-7.501-6.107-13.608-13.608-13.608V11.27c10.621 0 19.25 8.629 19.25 19.25z" /><path fill="{color}" d="M24.712 30.52c0-12.844-10.388-23.233-23.233-23.233V1.479c16.03 0 29.041 13.01 29.041 29.041h-5.808z" /></svg>
    )
}

IconRss.defaultProps = {
    ariaHidden: true,
    tabIndex: -1,
    role: 'presentation',
    color: '#000000'
}