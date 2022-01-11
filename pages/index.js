import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://i.picsum.photos/id/878/1500/1500.jpg?hmac=xENPkZXexZyGh5WkcyTom4EgyydoK-V7UnECNFbl6Os',
        address: 'Some address5,12345 Some city',
        description: 'This is first our meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://i.picsum.photos/id/878/1500/1500.jpg?hmac=xENPkZXexZyGh5WkcyTom4EgyydoK-V7UnECNFbl6Os',
        address: 'İs adresi,12345 Some city',
        description: 'This is second our meetup'
    },
    {
        id: 'm2',
        title: 'A thirt Meetup',
        image: 'https://i.picsum.photos/id/878/1500/1500.jpg?hmac=xENPkZXexZyGh5WkcyTom4EgyydoK-V7UnECNFbl6Os',
        address: 'Ev adresi,12345 Some city',
        description: 'This is thirt our meetup'
    }
]

const HomePage = () => {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}
export default HomePage;