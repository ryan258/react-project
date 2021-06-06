import { Route, Switch } from 'react-router'
import Layout from './components/layout/Layout'
import AllMeetupsPage from './pages/AllMeetups'
import FavoritesPage from './pages/Favorites'
import NewMeetupPage from './pages/NewMeetup'

function App() {
  return (
    <Layout>
      {/* Switch - just render the first path that matches */}
      <Switch>
        <Route exact path="/">
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
