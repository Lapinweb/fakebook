import { revalidatePath } from "next/cache";

export default async function CommentForm({ id }: { id: string }) {
	async function createComment(formData: FormData) {
		"use server";
		const rawFormData = {
			author: formData.get("author"),
			text: formData.get("comment"),
		};
		let created = false;

		try {
			const response = await fetch(
				`http://localhost:8080/books/${id}/comments`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(rawFormData),
				}
			);
			const data = await response.json();
			created = true;
		} catch (error: any) {
			console.log(error);
		} finally {
			if (created) {
				revalidatePath(`works/[id]`, 'page');
			}
		}
	}

	return (
		<div className="collapse w-full sm:w-2/3 ">
			<input type="checkbox" />

			<div className="collapse-title bg-accent text-accent-content">
				Add a comment
			</div>

			<div className="collapse-content bg-base-300 text-base-content">
				<form
					action={createComment}
					id="commentForm"
					className="form-control w-full gap-3 py-4"
				>
					<input
						className="input input-bordered w-full max-w-xs bg-neutral-content"
						type="text"
						name="author"
						id="author"
						placeholder="Name"
						required
						aria-required
					/>
					<textarea
						name="comment"
						id="comment"
						className="textarea textarea-bordered textarea-lg bg-neutral-content"
						placeholder="Add a comment..."
						required
						aria-required
					/>
					<button className="btn btn-accent self-end" type="submit">
						Comment
					</button>
				</form>
			</div>
		</div>
	);
}
