import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ padding: 10, background: "#ddd" }}>
      <div style ={{ display:"flex", justifyContent:"space-around" }}>
        <img src="/abes.png" width="150" />
        <Link to="/">Home</Link> |{" "}
        <Link to="/work">Work</Link>
      </div>
     
    </div>
  );
}
