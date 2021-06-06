// useHistory provides us w/ an object of methods that allow us to manipulate the browser history, i.e. to navigate away
import { useHistory } from 'react-router-dom'

import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  const history = useHistory()

  const addMeetupHandler = (meetupData) => {
    fetch('https://react-getting-started-12d7f-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }) // fetch returns a promise so we can ".then()" off it
      .then(() => {
        // replace method will navigate us away, but won't allow us to use the back button to go back to the previous page
        history.replace('/')
      })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage
