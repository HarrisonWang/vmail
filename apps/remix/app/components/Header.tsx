import { Link } from "@remix-run/react";
import { GithubIcon } from "icons";

export default function Header() {
  return (
    <div className="p-1 flex items-center">
      <Link to="/" className="font-semibold text-lg">
        Vmail
      </Link>
      <a
        href="https://github.com/yesmore/vmail"
        rel="noreferrer"
        target="_blank"
        className="ml-auto">
        <GithubIcon className="size-8" />
      </a>
    </div>
  );
}
