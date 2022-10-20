import { useState } from "react";
function PostsTest() {
    const [Likes, setLikes] = useState(false);
    const likeUnlike = async () => {
        setLikes(!Likes);
        var token = localStorage.getItem("token");
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`,
            },
            body: JSON.stringify({
                postId: Likes,
            }),
        };
        const response = await fetch(
            "https://social-network-api.oscfr1.scalingo.io/TravelBook/post/like",
            options
        );
        await response.json();
    };
    return (
        <div>
            <button onClick={likeUnlike}>
                {Likes ? <span>💓</span> : <span>❤</span>}
            </button>
        </div>
    );
}
export default PostsTest;
