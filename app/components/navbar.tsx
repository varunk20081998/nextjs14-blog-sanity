import Link from "next/link";
import { ModeToggle } from "./modeToggle";

export default function NavBar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-3xl mx-auto px-1 py-5">
      <Link href="/" className="font-bold text-3xl">
        Varun&apos;s <span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
