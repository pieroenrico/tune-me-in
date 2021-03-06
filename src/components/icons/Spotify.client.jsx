const Spotify = (props) => {
  return (
    <div className="inline-block mt-4 group cursor-pointer">
      <div className="border border-dark flex items-center text-xs p-2 bg-light-f group-hover:bg-light-ff">
        <svg
          enableBackground="new 0 0 24 24"
          height="24px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 24 24"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <g>
                <path d="M12,23.5C5.7,23.5,0.5,18.3,0.5,12C0.5,5.7,5.7,0.5,12,0.5c6.3,0,11.5,5.2,11.5,11.5C23.5,18.3,18.3,23.5,12,23.5z      M12,1.5C6.2,1.5,1.5,6.2,1.5,12c0,5.8,4.7,10.5,10.5,10.5c5.8,0,10.5-4.7,10.5-10.5C22.5,6.2,17.8,1.5,12,1.5z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M16.6,16.6c-0.1,0-0.2,0-0.3-0.1c-2.4-1.5-5.6-1.8-9.3-1c-0.3,0.1-0.5-0.1-0.6-0.4s0.1-0.5,0.4-0.6     c4-0.9,7.4-0.5,10.1,1.1c0.2,0.1,0.3,0.5,0.2,0.7C16.9,16.5,16.7,16.6,16.6,16.6z" />
              </g>
              <g>
                <path d="M17.7,13.6c-0.1,0-0.2,0-0.3-0.1c-2.9-1.8-7.2-2.3-10.5-1.2c-0.3,0.1-0.5-0.1-0.6-0.3s0.1-0.5,0.3-0.6     c3.6-1.1,8.2-0.6,11.4,1.3c0.2,0.1,0.3,0.5,0.2,0.7C18,13.5,17.8,13.6,17.7,13.6z" />
              </g>
              <g>
                <path d="M18.9,10.3c-0.1,0-0.2,0-0.3-0.1C15.3,8.2,9.6,8,6.3,9C6.1,9.1,5.8,8.9,5.7,8.7C5.6,8.4,5.8,8.1,6,8     C9.5,7,15.5,7.2,19.2,9.3c0.2,0.1,0.3,0.4,0.2,0.7C19.3,10.2,19.1,10.3,18.9,10.3z" />
              </g>
            </g>
          </g>
        </svg>
        <span className="ml-2 uppercase text-dark font-semibold">
          Listen on Spotify
        </span>
      </div>
    </div>
  );
};

export default Spotify;
