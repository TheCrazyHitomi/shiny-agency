import DefaultPicture from '../../assets/default-picture.jpg';
import Card from '../../components/Card';
import styled from 'styled-components';

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

const PageWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    `

const PageTitle = styled.h1`
    color: #2F2E41;
    font-size: 24px;
    font-weight: bold;
    `
const PageSubtitle = styled.h3`
    color: #8186a0;
    font-size: 16px;
    font-weight: normal;
    `

const CardContainer = styled.div`
    margin-top: 50px;
    display: grid;
    gap: 24px;
    grid-template-row: 250px 250px;
    grid-template-columns: repeat(2, 1fr);
    color: #2F2E41;
    `


const Freelances = () => {
    return (
        <PageWrapper>
            <div>
                <PageTitle>Trouvez votre Prestataire</PageTitle>
                <PageSubtitle>Chez Shiny, nous réunissons les meilleurs profils pour vous. </PageSubtitle>
            </div>
            <CardContainer>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
            </CardContainer>
        </PageWrapper>
    )
}

export default Freelances;