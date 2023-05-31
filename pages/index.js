import Link from "next/link";
import Header from "../src/components/header"

export default function Home() {
	return (
		<>
			<main className={`inline-flex `}>

			<Link href="/admin">Logout</Link>
			<Link href="/login">login</Link>
			</main>

		</>
	);
}