import './Profile.css'

function Profile(){
    return(
        <>
            <div className='top'>
                <h1 className='title'>Profile</h1>
            </div>

            <div className='profile'>
                <div className='picture'>
                    <img className='picture' src="/profile.jpg" alt="default profile picture" />
                </div>
            </div>
        </> 
    );
}

export default Profile;