import Image from "next/image";
import BookItem from "./BookItem";

export default function BooksList({ books }) {
	return (
		<div>
			<h2>Trending</h2>
			<ul className="p-0 grid grid-cols-1 md:grid-cols-2 gap-3 list-none">
				{books.slice(0, 6).map((book) => {
					return <BookItem book={book} key={book.cover_edition_key} />;
				})}
			</ul>
		</div>
	);
}
