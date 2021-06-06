import { Link } from 'react-router-dom'

// we're importing the css styles as an object
// - then all the css classes in your style sheet will become properties of that object
// - then we can use those classes in your JSX to attach those classes to target elements
// and giving it the name 'classes'
// - behind the scenes the class name will be made unique per component
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
