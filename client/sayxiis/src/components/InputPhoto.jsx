import './styles/inputPhoto.css';

export default function ButtonPhoto({ uploadPhoto }) {
  return (
    <div>
      <div>
        <label htmlFor="files" className="inputBtn">
          Say XiiS
        </label>
        <input
          onChange={(e) => {
            uploadPhoto(e.target.files);
          }}
          name="urlPhoto"
          className="inputPhoto"
          id="files"
          type="file"
        />
      </div>
    </div>
  );
}
