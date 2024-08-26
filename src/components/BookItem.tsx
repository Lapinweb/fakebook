export default function BookItem(book) {


   return (
		<li
			className="bg-secondary text-secondary-content rounded-lg p-3"
		>
			<h3 className="my-0 font-bold text-secondary-content overflow-hidden whitespace-nowrap text-ellipsis">
				{book.title}
			</h3>
			<div className="divider"></div>
			<div className="w-full h-auto grid grid-cols-2">
				{/* <Image
					className="object-contain m-0 w-auto"
					src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
					alt="placeholder"
					loading="lazy"
					width={0}
					height={0}
					sizes="100vw"
				/> */}
				<p>Author : {book.author_name}</p>
			</div>
		</li>
	);
}