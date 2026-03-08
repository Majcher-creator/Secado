export default function Gallery() {
  // Placeholder images - to be replaced with actual project photos
  const galleryItems = [
    {
      title: "Pokrycie dachu blachodachówką",
      category: "Blachodachówka",
    },
    {
      title: "Montaż systemu rynnowego",
      category: "Orynnowanie",
    },
    {
      title: "Papa termozgrzewalna",
      category: "Papa",
    },
    {
      title: "Gonty bitumiczne",
      category: "Gonty",
    },
    {
      title: "Obróbki blacharskie",
      category: "Blacharstwo",
    },
    {
      title: "Kompleksowe pokrycie dachu",
      category: "Kompleksowa realizacja",
    },
    {
      title: "Montaż okien dachowych",
      category: "Okna dachowe",
    },
    {
      title: "Remont dachu",
      category: "Remont",
    },
    {
      title: "Ocieplenie dachu",
      category: "Ocieplenie",
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            <span className="text-accent">Galeria</span> Realizacji
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Zobacz nasze wybrane realizacje - profesjonalne wykonanie i dbałość
            o detale
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200"
            >
              {/* Placeholder Background Pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${
                    index % 2 === 0 ? "1e3a8a" : "f97316"
                  }' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              {/* Image Placeholder Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-gray-400 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-3 py-1 bg-accent rounded-full text-white text-xs font-semibold mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-white font-bold text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* "Zdjęcie wkrótce" Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                Zdjęcie wkrótce
              </div>
            </div>
          ))}
        </div>

        {/* Info Note */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-gray-50 border-l-4 border-accent p-6 rounded-r-lg">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-primary mb-2">
                  Galeria w przygotowaniu
                </h4>
                <p className="text-gray-600">
                  Przygotowujemy profesjonalne zdjęcia naszych realizacji.
                  Wkrótce będziecie mogli zobaczyć pełne portfolio naszych
                  projektów dekarskich. W międzyczasie zapraszamy do kontaktu -
                  chętnie przedstawimy nasze referencje i wcześniejsze
                  realizacje.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Chcesz zobaczyć więcej naszych realizacji?
          </p>
          <a
            href="tel:505438585"
            className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Zadzwoń i zapytaj o portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
}
