import { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList'

import FavoritesContext from '../store/favorites-context'

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext)

  let content

  if (favoritesCtx.totalFavorites === 0) {
    content = `You have no favorites, it looks like you have grown tired of life... 👻`
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default FavoritesPage
