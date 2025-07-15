export function Header() {
  const backgroundImageUrl =
    "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-37.jpg";

  return (
    <header
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start text-white"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="h-screen text-center bg-black bg-opacity-25 p-4 rounded-lg">
        <div className="mb-8">
          <h1 className="text-7xl font-self-deception-regular mb-4 pt-8">
            Tatiana & Marcos
          </h1>
          <p className="text-lg font-serif italic">- 19.10.2025 -</p>
        </div>
        <blockquote className="font-belista italic max-w-md mx-auto">
          "Todos somos mortales hasta el primer beso o la segunda cerveza"
        </blockquote>
      </div>
    </header>
  );
}
