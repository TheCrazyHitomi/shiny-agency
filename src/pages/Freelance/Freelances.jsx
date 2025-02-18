import { useFetch, useTheme } from '../../utils/hooks';

import Card from '../../components/Card';
import styled from 'styled-components';
import { Loader } from '../../utils/style/Atoms.jsx';
import colors from '../../utils/style/colors.js';


const PageWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-content: center;
    align-items: center;
    `

const PageTitle = styled.h1`
    color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
    font-size: 24px;
    font-weight: bold;
    `
const PageSubtitle = styled.h3`
    color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
    font-size: 16px;
    font-weight: normal;
    `

const CardContainer = styled.div`
    margin-top: 50px;
    display: grid;
    gap: 24px;
    grid-template-row: 250px 250px;
    grid-template-columns: repeat(2, 1fr);
    color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
    `

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Freelances = () => {

    const { theme } = useTheme();

    const { data, isLoading, error } = useFetch(`http://localhost:8000/freelances`);
    const  freelancersList  = data?.freelancersList

if (error) {
    return <span>Oups il y a eu un problème</span>
}

    return (
        <PageWrapper>

                <PageTitle theme={theme}>Trouvez votre Prestataire</PageTitle>
                <PageSubtitle theme={theme}>Chez Shiny, nous réunissons les meilleurs profils pour vous. </PageSubtitle>

            {isLoading ? (
                <LoaderWrapper>
                <Loader theme={theme}/>
                </LoaderWrapper>
            ) : (
            <CardContainer>
            {freelancersList && freelancersList.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.job}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
            </CardContainer>
            )}
        </PageWrapper>
    )
}

export default Freelances;