import DefaultPicture from '../../assets/default-picture.jpg';
import Card from '../Card';

const freelanceProfiles = [
    {
        name : "John Doe",
        jobTitle: "DevOps",
        picture : DefaultPicture,
    },
    {
        name : "Johnny Biche",
        jobTitle: "Developpeur Frontend",
        picture : DefaultPicture,
    },
    {
        name : "Jane Doe",
        jobTitle: "Developpeuse Fullstack",
        picture : DefaultPicture,
    }, {
        name : "Josette Biche",
        jobTitle: "Developpeuse Backend",
        picture : DefaultPicture,
    }
]


const Freelances = () => {
    return (
        <div>
            <h1>👩·💻👨·💻 Freelances 💻👨·💻·👩</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card 
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}   
        </div>
    )
}

export default Freelances;