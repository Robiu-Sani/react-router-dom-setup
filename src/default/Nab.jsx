import { Link } from "react-router-dom";

export default function Nab() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/product">product</Link>
        </li>
      </ul>
    </div>
  );
}
