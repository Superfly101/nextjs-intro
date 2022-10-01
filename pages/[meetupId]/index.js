import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://i.natgeofe.com/n/2762993a-cd7c-436d-b1bd-8f7502292af1/67547.jpg"
      title="First Meetup"
      address="Some street 5, Some city"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://i.natgeofe.com/n/2762993a-cd7c-436d-b1bd-8f7502292af1/67547.jpg",
        id: "m1",
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
