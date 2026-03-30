export function Footer() {
  return (
    <footer className="bg-ink border-t border-paper/10 px-6 md:px-12 py-7">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-body text-[10px] tracking-[0.25em] uppercase text-paper/30">
          © {new Date().getFullYear()} James Brooks
        </p>
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-paper/20">
          Built with Next.js 14 · Deployed on Vercel
        </p>
      </div>
    </footer>
  )
}
