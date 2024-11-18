export default function CommentForm() {
	return (
		<form action="" className="flex flex-col w-full sm:w-2/3">
			<label className="form-control my-2">
				<div className="label">
					<span className="label-text">Ajouter un commentaire:</span>
				</div>
				<textarea className="textarea textarea-bordered textarea-lg" />
			</label>
			<button className="btn btn-accent my-2 self-end">Envoyer</button>
		</form>
	);
}