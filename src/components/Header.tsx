import Link from "next/link";

export default function Header() {
	return (
		<header className="sticky top-0 bg-primary text-primary-content z-10">
			<div className="navbar">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<Link href={"/works"}>Browse</Link>
							</li>
						</ul>
					</div>
					<Link href={"/"} className="btn btn-ghost text-xl">
						FakeBook 📕
					</Link>
				</div>
				<div className="navbar-end">
					<div className="hidden lg:flex">
						<ul className="menu menu-horizontal px-1 not-prose">
							<li>
								<Link href={"/works"}>Browse</Link>
							</li>
						</ul>
					</div>
					<a className="btn btn-ghost">Button</a>
				</div>
			</div>
		</header>
	);
}
