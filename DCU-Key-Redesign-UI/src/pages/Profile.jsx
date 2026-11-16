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

                <div className='information'>
                    <div className='personal'>
                        <p className='text'>Your Personal Details</p>

                        <div className='filling'>
                            <p>First Name:</p>
                            <p>Middle Name:</p>
                            <p>Last Name:</p>
                            <p>Date of Birth:</p>
                            <p>Phone Number:</p>
                        </div>
                    </div>

                    <div className='address'>
                        <p className='text'>Address Details</p>

                        <div className='filling'>
                            <p>Country:</p>
                            <p>Line 1:</p>
                            <p>Line 2:</p>
                            <p>Line 3:</p>
                            <p>City:</p>
                            <p>County:</p>
                            <p>Erircode:</p>
                            <p>Permanent</p>

                        </div>
                    </div>

                    <div className='emergency'>
                        <p className='text'>Emergency Contact Details</p>

                        <div className='filling'>
                            <p>Name:</p>
                            <p>Relationship:</p>
                            <p>Phone Number:</p>
                            <p>Address:</p>
                            <p>Additional Contact</p>
                            <p>Name:</p>
                            <p>Relationship:</p>
                            <p>Phone Number:</p>
                            <p>Address:</p>
                        </div>
                    </div>

                    <div className='bank'>

                        <p className='text'>Bank Account Details</p>

                        <div className='filling'>
                            <p>Bank Name:</p>
                            <p>Branch:</p>
                            <p>Account Name:</p>
                            <p>Account Number:</p>
                            <p>Sort Code:</p>
                            <p>IBAN:</p>
                        </div>
                    </div>
                </div>


            </div>

            
        </> 
    );
}

export default Profile;