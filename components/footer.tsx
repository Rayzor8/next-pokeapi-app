export default function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4 text-center">
        <p>
          Data provided by{" "}
          <a
            href="https://pokeapi.co/"
            className="text-accent-yellow hover:underline"
            target="_blank"
          >
            PokéAPI
          </a>
        </p>
        <p className="text-sm mt-1 text-kanit italic">
          © 2025 - Rayzor.dev
        </p>
      </div>
    </footer>
  );
}
