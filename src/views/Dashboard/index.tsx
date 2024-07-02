import { Link, NavLink } from "react-router-dom"

export default function Dashboard() {
  return <>
  
    <div className="nav naxatw-flex naxatw-mx-2">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">login</Link>
      </ul>
    </div>

    <h1 className="">Hello Dashboard</h1>
    </>
  
}
