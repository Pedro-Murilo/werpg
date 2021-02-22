import { HeaderExperience, CurrentExperience, ContainerExperience } from './ExperienceBarStyle';

export function ExperienceBar() {
    return (
        <HeaderExperience>
            <span>0 xp</span>
            <ContainerExperience>
                <div style={{ width: '50%' }} />
                <CurrentExperience style={{ left: '50%' }}>300 xp</CurrentExperience>
            </ContainerExperience>
            <span>600 xp</span>
        </HeaderExperience>
    )
}