export default function IconClose({ariaHidden, tabIndex, role, color}) {
  return (
    <svg
      aria-hidden={ariaHidden}
      tabIndex={tabIndex}
      role={role}
      className="icon icon-close"
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M17.825,16l10.208,10.207l-1.827,1.826L16,17.824L5.793,28.033l-1.826-1.826L14.174,16L3.967,5.793l1.826-1.826L16,14.174 L26.208,3.967l1.825,1.826L17.825,16z"
      />
    </svg>
  );
}

IconClose.defaultProps = {
  ariaHidden: true,
  tabIndex: -1,
  role: 'presentation',
  color: '#000000',
};
