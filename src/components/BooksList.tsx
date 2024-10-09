import BookItem from "./BookItem";

type Book = {
	title: string;
	author_name: string[];
	cover_i: string;
	key: number;
};

export default function BooksList({ books }: { books: Book[] }) {
	return (
		<ul className="p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 list-none">
			{books.map((book) => {
				return (
					<BookItem book={book} key={book.title} />
				);
			})}
		</ul>
	);
}
