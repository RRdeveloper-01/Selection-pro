import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="page narrow" style={{ textAlign: 'center' }}>
      <h1>This page does not exist</h1>
      <p className="lead" style={{ margin: '0 auto 18px' }}>The link may be old or mistyped. Try one of these instead.</p>
      <div className="btn-row" style={{ justifyContent: 'center' }}>
        <Link className="btn" href="/">Home</Link><Link className="btn ghost" href="/exam">All exams</Link><Link className="btn ghost" href="/daily-quiz">Daily quiz</Link>
      </div>
    </div>
  );
}
