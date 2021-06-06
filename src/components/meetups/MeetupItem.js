// taps into the context and gets values from there
// - allows us to establish a connection between this component and the context
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'

import Card from '../ui/Card'
import classes from './MeetupItem.module.css'

const MeetupItem = ({ id, title, image, address, description }) => {
  const favoritesCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id)

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id)
    } else {
      favoritesCtx.addFavorite({
        id,
        title,
        description,
        image,
        address
      })
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
