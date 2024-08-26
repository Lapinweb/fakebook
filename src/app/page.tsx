"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BooksList from "@/components/BooksList";

export default function Home() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		async function getData() {
			let data = await fetch("https://openlibrary.org/trending/now.json");
			let parsedData = await data.json();
			setBooks(parsedData.works);
		}
		getData();
	}, []);

	return (
		<div className="px-4">
			<h1 className="my-3">Home</h1>
			<BooksList books={books} />
		</div>
	);
}
