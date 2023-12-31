function ProfileCard ({ title, handle, img, altImg, desc }) {

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={img} alt={altImg}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{handle}</p>
                    </div>
                </div>
                <div class="content">
                    { desc }
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
