import Image from "next/image";
import Link from "next/link";

type Book = {
	title: string;
	author_name: string[];
	cover_i: string;
};

export default function BookItem({ book }: { book: Book }) {
	return (
		<li className="bg-secondary text-secondary-content rounded-lg p-3">
			<Link href="#">
				<h3 className="my-0 font-bold text-secondary-content overflow-hidden whitespace-nowrap text-ellipsis">
					{book.title}
				</h3>
			</Link>
			<div className="divider"></div>
			<div className="w-full">
				<div className="h-52 relative">
					<Image
						className="object-contain m-0 w-auto"
						src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
						alt="placeholder"
						loading="lazy"
						width={0}
						height={0}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
					/>
				</div>
				{/* <div>
					<h4>{book.author_name.length > 1 ? "Authors" : "Author"} :</h4>
					<ul className="list-none">
						{book.author_name.map((author, index) => {
							return <li key={`author-${index}}`}>{author}</li>;
						})}
					</ul>
				</div> */}
			</div>
		</li>
	);
}
