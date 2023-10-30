import { Models } from "appwrite"

type PostStatsProps = {
    post: Models.Document;
    userId: string;
}

const PostStats = ({ post, userID }: PostStatsProps) => {
    return (
        <div className="flex jsutify-between items-center z-20">
            <div className="flex gap-2 mr-5">
                <img src="/assets/icons/like.svg" />

            </div>

        </div>
    )
}

export default PostStats
