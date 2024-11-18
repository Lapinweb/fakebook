type Book = {
	title: string;
	author: string[];
	cover_i: string;
	key: number;
	comments: Comment[];
};

export default function WorkDetails({ work }: { work: Book }) {
	return (
		<>
			<div>
				<p>{work.author}</p>
				<p className="text-justify md:w-3/4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					fermentum velit diam, sit amet tristique felis egestas tincidunt.
					Quisque ac molestie felis. Aliquam sit amet est libero. Maecenas
					lorem augue, gravida et lorem vitae, egestas interdum lacus. Duis
					dictum sapien ac elit ornare tincidunt. Praesent turpis quam,
					ultrices nec orci eleifend, tristique sollicitudin lectus. Donec
					erat ligula, suscipit eu mattis sed, accumsan id orci. Interdum
					et malesuada fames ac ante ipsum primis in faucibus. Morbi eget
					rhoncus libero. Praesent a dolor ut libero fermentum vestibulum
					et ac nisl. Etiam imperdiet sapien mollis accumsan gravida. Nam
					mollis nibh ante, sit amet egestas diam interdum nec. Duis dui
					magna, sollicitudin id semper non, semper ac nisl. Cras non nunc
					nec sapien blandit rhoncus. Mauris venenatis orci lectus, at
					pretium nisl ultricies pulvinar. Etiam aliquam, ipsum non egestas
					mollis, ex nulla ultrices nunc, elementum tincidunt velit elit
					vel velit. Vestibulum in nibh metus. Curabitur augue nisi,
					suscipit eu tempus vitae, ultricies vitae diam. Donec viverra
					luctus lacus, sit amet rhoncus ex dapibus ut. Integer id dui
					ligula. Curabitur nec porttitor odio, ullamcorper elementum
					libero. Quisque felis nunc, mattis ac sodales vel, efficitur sed
					nibh.
				</p>
			</div>
		</>
	);
}
