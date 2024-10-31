import BooksList from "@/components/BooksList";

export default async function Home() {
		let data = await fetch("http://localhost:8080/books");
		let parsedData = await data.json();
		let books = parsedData.books;

	return (
		<div className="px-3 md:px-6">
			<h1 className="my-3">Home</h1>

			<div>
				<h2>Trending</h2>
				<BooksList books={books.slice(0, 6)} />
			</div>
		</div>
	);
}
