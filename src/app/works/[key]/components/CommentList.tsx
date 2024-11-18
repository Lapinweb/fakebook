type Comment = {
	ID: number;
	BookId: number;
	text: string;
	author: string;
};

export default function CommentList({ comments }: { comments: Comment[] }) {
	if (comments.length === 0) {
		return (
			<div className="w-full md:w-2/3">
				<p>Aucun commentaire</p>
			</div>
		);
	} else {
		return (
			<div className="w-full md:w-2/3 my-4">
				{comments.map((comment) => {
					return (
						<div className="chat chat-end" key={comment.ID}>
							<div className="chat-image avatar">
								<div className="w-10 rounded-full border border-neutral"></div>
							</div>

							<div className="chat-header">
								{comment.author}
								<time className="text-xs opacity-50 ml-2">12:46</time>
							</div>

							<div className="chat-bubble">{comment.text}</div>
						</div>
					);
				})}
			</div>
		);
	}
}
