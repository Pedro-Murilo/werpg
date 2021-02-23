import { ProfileContainer } from '../styles/components/Profile';

function Profile() {
    return (
        <ProfileContainer>
            <img src="https://avatars.githubusercontent.com/u/70861613?s=400&u=9af72a64aed28184a3cb324548fc8515754a7b2f&v=4" alt="Profile" />
            <div>
                <strong>Pedro Murilo</strong>
                <p>
                    <img className="level-icon" src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </ProfileContainer>
    )
}

export default Profile;