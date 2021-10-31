import {ContainerProfileCard, CardProfile} from './style.js'

function ProfileCard(props) {
    return (
        <ContainerProfileCard key={props.profile.id}>
            <CardProfile  photoBack={props.profile.photo}>
                <div>
                    <span id='name'>{props.profile.name},</span>
                    <span id='age'>{props.profile.age}</span>
                </div>
                <span id='bio'>{props.profile.bio}</span>
            </CardProfile>
        </ContainerProfileCard>
    )
}
export default ProfileCard;