import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import WorkDetails from "./components/WorkDetails";

type Comment = {
	ID: number;
	BookId: number;
	text: string;
	author: string;
};

type Book = {
	title: string;
	author: string[];
	cover_i: string;
	key: number;
	comments: Comment[];
};

export default async function Work({ params }: { params: { key: string } }) {
	let data = await fetch(`http://localhost:8080/books/${params.key}`);
	let parsedData = await data.json();
	let work = parsedData.book;
	const {key} = params;

	return (
		<div className="px-4 md:px-6">
			<h1 className="my-3">{work?.title || "Title"}</h1>
			<WorkDetails work={work} />

			<div>
				<h2>Commentaires ({work.comments.length})</h2>
				<CommentForm id={key} />
				<CommentList comments={work.comments} />
			</div>
		</div>
	);
}
