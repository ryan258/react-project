import { useState, useEffect } from 'react'
// import MeetupItem from '../components/meetups/MeetupItem'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
  }
]

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    // we want to send a request to our firebase backend whenever this page component is being rendered
    //! firebase doesn't send us back an array for us to map over, but instead an object w/ funky autoIDs that act like properties
    fetch('https://react-getting-started-12d7f-default-rtdb.firebaseio.com/meetups.json')
      .then((res) => {
        // turns response JSON into a JS object
        return res.json() // .json() will return a promise as well
      })
      .then((data) => {
        // now we can work on the data
        //! we'll deal w/ that funky set of object properties we're getting back from Firebase, time to transform the data
        const meetups = []

        for (const key in data) {
          // we'll create a new meetup for every key
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup)
        }

        // once the data is good to go
        setIsLoading(false)
        setLoadedMeetups(meetups)
      })
  }, []) // [] limits this to only being run once on mount, so this prevents the infinite loop we would otherwise be faced with
  //! simple rule for the dependencies array
  //! |-> you should add all external values your effect relies on

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  // so if state is loading, this doesn't get returned
  //! but when loading is complete the component rerenders and uses this return w/ the proper JSX
  return (
    <section>
      <h1>All Meetups</h1>
      {/* <MeetupList meetups={DUMMY_DATA} /> */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}

export default AllMeetupsPage
