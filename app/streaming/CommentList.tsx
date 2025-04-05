export default async function CommentList() {
    const comments = [{comment: 'Comment 1'}, {comment: 'Comment 2'}, {comment: 'Comment 3'}];
    return(
        <div>
            <ul>
                {comments.map((comment:any) => (
                    <li>{comment.comment}</li>
                ))}
            </ul>
        </div>
    )
}