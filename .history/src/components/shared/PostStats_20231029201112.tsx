import { useUserContext } from "@/context/AuthContext";
import { useDeleteSavedPost, useLikePost, useSavePost } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite"
import { useState, useEffect } from "react";

type PostStatsProps = {
    post: Models.Document;
    userId: string;
}

const PostStats = ({ post, userID }: PostStatsProps) => {

    const likesList = post.likes.map((user: Models.Document) => user.$id)

    const [likes, setLikes] = useState(likesList);
    const { mutate: likePost } = useLikePost();
    const { mutate: savePost } = useSavePost();
    const { mutate: deleteSavedPost } = useDeleteSavedPost();

    const { data: currentUser } = useUserContext();


    return (
        <div className="flex jsutify-between items-center z-20">
            <div className="flex gap-2 mr-5">
                <img src="/assets/icons/like.svg" alt="like" width={20} height={20} onClick={() => { }} className="cursor-pointer" />
                <p className="small-medium lg:base-medium">0</p>

            </div>

            <div className="flex gap-2 ">
                <img src="/assets/icons/save.svg" alt="like" width={20} height={20} onClick={() => { }} className="cursor-pointer" />


            </div>

        </div>
    )
}

export default PostStats
