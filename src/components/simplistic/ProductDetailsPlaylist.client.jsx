import Spotify from '../icons/Spotify.client';
const ProductDetailsPlaylist = (props) => {
  const {playlist} = props;
  return (
    <>
      {playlist.map((song, idx) => (
        <div
          className="flex items-start justify-between border-b border-gray-300 pb-2 mb-2"
          key={idx}
        >
          <div className="song-wrapper">
            <div className="song font-light text-2xl text-dark">
              {song.title}
            </div>
            <div className="text-lg">
              <span className="font-semibold text-dark">{song.author}</span>/
              <span className="font-light text-dark">{song.album}</span>
            </div>
          </div>
          <div className="font-bold pt-1 text-lg text-dark">
            {song.duration}
          </div>
        </div>
      ))}
      <Spotify />
    </>
  );
};
export default ProductDetailsPlaylist;
