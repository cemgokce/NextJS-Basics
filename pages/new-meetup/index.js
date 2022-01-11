import NewMeetUpForm from '../../components/meetups/NewMeetupForm'
import Layout from '../../components/layout/Layout'

function NewMeetUp() {
    const addMeetUpHandler = (enteredData) => {
        console.log(enteredData)

    }

    return (
        <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetUp
