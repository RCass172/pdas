function ProfileCard ({ title, handle, img, altImg }) {

    return (
        <div>
            <div><b>Profile Card</b></div><br></br>
            <img src={img} alt={altImg}/>
            <div>Title: {title}</div>
            <div>Handle: {handle}</div>
            <hr></hr>
        </div>
    )
}

export default ProfileCard;
