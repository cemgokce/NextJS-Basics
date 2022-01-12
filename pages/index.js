import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A First Meetup',
//         image: 'https://i.picsum.photos/id/878/1500/1500.jpg?hmac=xENPkZXexZyGh5WkcyTom4EgyydoK-V7UnECNFbl6Os',
//         address: 'Some address5,12345 Some city',
//         description: 'This is first our meetup'
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meetup',
//         image: 'https://i.picsum.photos/id/878/1500/1500.jpg?hmac=xENPkZXexZyGh5WkcyTom4EgyydoK-V7UnECNFbl6Os',
//         address: 'İs adresi,12345 Some city',
//         description: 'This is second our meetup'
//     },
//     {
//         id: 'm3',
//         title: 'A thirt Meetup',
//         image: 'https://i.picsum.photos/id/878/1500/1500.jpg?hmac=xENPkZXexZyGh5WkcyTom4EgyydoK-V7UnECNFbl6Os',
//         address: 'Ev adresi,12345 Some city',
//         description: 'This is thirt our meetup'
//     }
// ]

const HomePage = (props) => {


    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list of highly active React meetups!!" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

//  export async function getServerSideProps() {


// }

export async function getStaticProps() {
    //fetching Data
    const client = await MongoClient.connect('mongodb+srv://cemgokce1:Dkxorc-123@nodeexpressproject.zfbmr.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    };
}

export default HomePage;