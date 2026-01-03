export default function Footer() {
    return (
        <footer className="py-12 bg-dark-bg text-center border-t border-white/5">
            <p className="text-gray-500 font-hero-font text-xs tracking-widest uppercase">
                Designed & Built by <span className="text-accent-teal">Hemalatha K</span> &copy; {new Date().getFullYear()}
            </p>
        </footer>
    )
}
