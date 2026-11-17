import './Profile.css'

const student = {
    personal: {
        firstName: "Alex",
        middleName: "James",
        lastName: "Murphy",
        dateOfBirth: "15/06/2004",
        phoneNumber: "087 000 1234"
    },

    address: {
        country: "Ireland",
        line1: "12 Oakwood Drive",
        line2: "Castleknock",
        line3: "",
        city: "Dublin",
        county: "Dublin",
        eircode: "D00 XXXX",
        permanent: "Yes"
    },

    emergencyContacts: [
        {
            name: "Sarah Murphy",
            relationship: "Mother",
            phoneNumber: "087 000 5678",
            address: "12 Oakwood Drive, Dublin"
        },
        {
            name: "Michael Murphy",
            relationship: "Father",
            phoneNumber: "087 000 9012",
            address: "12 Oakwood Drive, Dublin"
        }
    ]
};


function Profile(){
    return(
        <>
            <div className='top'>
                <h1 className='title'>Profile</h1>
            </div>

            <div className='profile'>
                <div className='start'>
                    <img className='picture' src="/profile.jpg" alt="default profile picture" />
                    <button className='next'>Edit</button>
                </div>

                <div className='information'>
                    <div className='personal'>
                        <p className='text'>Your Personal Details</p>

                        <div className='filling'>
                            <div className='detail-row'>
                                <p>First Name:</p>
                                <span>{student.personal.firstName}</span>
                            </div>
                            <div className='detail-row'>
                                <p>Middle Name:</p>
                                <span>{student.personal.middleName}</span>
                            </div>
                            <div className='detail-row'>
                                <p>Last Name:</p>
                                <span>{student.personal.lastName}</span>
                            </div>
                            <div className='detail-row'>
                                <p>Date of Birth:</p>
                                <span>{student.personal.dateOfBirth}</span>
                            </div>
                            <div className='detail-row'>
                                <p>Phone Number:</p>
                                <span>{student.personal.phoneNumber}</span>
                            </div>
                        </div>
                    </div>

                    <div className='address'>
                        <p className='text'>Address Details</p>

                        <div className='filling'>
                            <div className='detail-row'>
                                <p>Country:</p>
                                <span>{student.address.country}</span>
                            </div>
                            <div className='detail-row'>
                                <p>Line 1:</p>
                                <span>{student.address.line1}</span>
                            </div>
                            <div className='detail-row'>
                                <p>Line 2:</p>
                                <span>{student.address.line2}</span>
                            </div>
                            <div className='detail-row'>
                                <p>Line 3:</p>
                                <span>{student.address.line3}</span>
                            </div>
                            <div className='detail-row'>
                                <p>City:</p>
                                <span>{student.address.city}</span>
                            </div>
                            <div className='detail-row'>
                                <p>County:</p>
                                <span>{student.address.county}</span>
                            </div>
                            <div className='detail-row'>
                                <p>Eircode:</p>
                                <span>{student.address.eircode}</span>
                            </div>
                            <div className='detail-row'>
                                <p>Permanent:</p>
                                <span>{student.address.permanent ? 'Yes' : 'No'}</span>
                            </div>
                        </div>
                    </div>

                    <div className='emergency'>
                        <p className='text'>Emergency Contact Details</p>

                        {student.emergencyContacts.map((contact, index) => (
                            <div className="filling">
                                <div className='detail-row'>
                                    <p>Name:</p>
                                    <span>{contact.name}</span>
                                </div>
                                <div className='detail-row'>
                                    <p>Relationship:</p>
                                    <span>{contact.relationship}</span>
                                </div>
                                <div className='detail-row'>
                                    <p>Phone Number:</p>
                                    <span>{contact.phoneNumber}</span>
                                </div>
                                <div className='detail-row'>
                                    <p>Address:</p>
                                    <span>{contact.address}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

            
        </> 
    );
}

export default Profile;