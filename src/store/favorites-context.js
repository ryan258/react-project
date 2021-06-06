import { createContext, useState } from 'react'

const FavoritesContext = createContext({
  // initial values
  favorites: [],
  totalFavorites: 0,
  // the following just makes for better auto completion and doesn't really do anything else
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
}) // context in the end is a JS object

// and we need a way of changing these values
//! this component will be a regular component w/ the job of providing this context to all the components that are interested in listening to the values

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([])
  // - and also responsible for updating the context values
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup)
    })
  }
  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    })
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId)
  }
  // - and when vvv updates, anything listening to the context will rerender
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    // we'll add pointers to our context functions
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  }

  return <FavoritesContext.Provider value={context}>{children}</FavoritesContext.Provider>
}

export default FavoritesContext
