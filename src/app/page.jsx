import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="card dashboard">
        <h1>Authentication Project</h1>

        <Link href="/register">
          <button className="btn">Create Account</button>
        </Link>

        <br />
        <br />

        <Link href="/login">
          <button className="btn">Login</button>
        </Link>
      </div>
    </div>
  );
}