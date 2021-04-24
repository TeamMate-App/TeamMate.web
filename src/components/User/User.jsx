

export default function User({
    name,
    email,
    address,
    image,
    id,
}) {
    console.log("llego");
    console.log({ image });
    return (
        <>
            <div className="blog-card">
                <div className="meta">
                    <div className="photo" style={{
                        backgroundImage: `url(${image})`}} />
                            < ul className="details" >
            <li className="author">
              <a href="/">{name}</a>
            </li>
            <li className="email">{email}</li>
            <li className="tags">
              <ul>
                <li>
                  <a href="/">{id}</a>
                </li>
                <li>
                  <a href="/">Code</a>
                </li>
                <li>
                  <a href="/">HTML</a>
                </li>
                <li>
                  <a href="/">CSS</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
                <div className="description">
                    <h1>
                        <a href="/">{name}</a>
                    </h1>
                    <h2>{address}</h2>
                    <p></p>
                    <p className="read-more">
                        <a href="/"></a>
                    </p>
                </div>
            </div>
        </>
    );
}
