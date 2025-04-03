import { Button } from '@ttt/libs';
import { NavLink } from 'react-router';

export function AppNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
      
      <Button />
    </nav>
  );
}
