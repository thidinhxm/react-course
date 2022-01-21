const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups Page</h1>
            <ul>
                {DUMMY_DATA.map(meetup => (
                    <li key={meetup.id}>
                        <h2>{meetup.title}</h2>
                        <img src={meetup.image} alt={meetup.title} />
                        <p>{meetup.description}</p>
                        <p>{meetup.address}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default AllMeetupsPage;