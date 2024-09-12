type Book = {
	title: string;
	author_name: string[];
	cover_i: string;
	key: number;
};

export default async function Work({ params }: { params: { key: string } }) {
	let data = await fetch(`http://localhost:8080/books/${params.key}`);
	let parsedData = await data.json();
	let work = parsedData.data;

	return (
		<div className="px-3 md:px-6">
			<h1 className="my-3">{work?.title || "Title"}</h1>
			<WorkDetails work={work} />
		</div>
	);
}

function WorkDetails({ work }: { work: Book }) {
	return (
		<div>
			<p>{work.author_name?.join(", ") || ""}</p>
		</div>
	);
}
