import { Fragment } from 'react'
import Head from 'next/head'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm'
import Layout from '../../components/layout/Layout'
import { useRouter } from 'next/router'

function NewMeetUp() {
    const router = useRouter()
    async function addMeetUpHandler(enteredData) {

        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);
        router.push('/');
    }

    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta name="description" content="Add your own meetups and create amazing networking opputunities" />
            </Head>
            <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
        </Fragment>
    )
}

export default NewMeetUp
