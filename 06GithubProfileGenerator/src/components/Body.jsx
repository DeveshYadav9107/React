import { useState } from "react"

function Body(){
    const [profile,setProfile] = useState([]);
    const [numberOfProfile,setnumberOfProfile] = useState("");
    const [error,setError] = useState("");

    async function generateProfile(count){
        if (!count || count < 1 || count > 100) {
            setError("Enter a number between 1 and 100.");
            return;
        }

        setError("");
        try {
            let ran = Math.floor(Math.random()*10000);
            const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error("GitHub returned an unexpected response.");
            }

            setProfile(data);
        } catch (error) {
            setProfile([]);
            setError("Unable to load profiles.");
        }
    }

    return(
        <section className="profile-viewer">
            <div className="search-controls">
                <input type="number" min="1" max="100" placeholder="Enter Number" aria-label="Number of profiles" value={numberOfProfile} onChange={(e)=>{setnumberOfProfile(e.target.value)}} />
                <button onClick={() => generateProfile(numberOfProfile)}>Search Profile</button>
            </div>

            {error && <p className="profile-error" role="alert">{error}</p>}
            
            <div className="profile-grid">
                {profile.map((value)=>{
                    return (
                        <article className="profile-card" key={value.id}>
                            <img className="profile-avatar" src={value.avatar_url} alt={`${value.login}'s GitHub avatar`} />
                            <h2>{value.login}</h2>
                            <a href={value.html_url} target="_blank" rel="noreferrer">View profile</a>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Body