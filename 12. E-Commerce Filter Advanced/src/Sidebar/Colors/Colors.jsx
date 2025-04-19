import "./Colors.css";
function Colors() {
  return (
    <div>
      <h2 className="sidebar-title">Colors</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id="" />
          <span className="checkmark"></span>All
        </label>
      </div>
    </div>
  );
}

export default Colors;
