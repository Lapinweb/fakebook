"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function getData() {
			let data = await fetch("https://jsonplaceholder.typicode.com/posts");
			let parsedData = await data.json();
			setPosts(parsedData);
		}
		getData();
	}, []);

	return (
		<div className="px-4">
			<h1 className="my-3">Dashboard</h1>
			<ul className="p-0 grid grid-cols-2 gap-3">
				{posts.map((post: { title: string; body: string }) => {
					return (
						<li className="bg-blue-200 rounded-lg p-3">
							<h1 className="font-bold">{post.title}</h1>
							<p>{post.body}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
