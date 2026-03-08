export default function Offer() {
  const hurtownia = [
    "Materiały dekarskie",
    "Blachy i blachodachówki",
    "Papa termozgrzewalna",
    "Gonty bitumiczne",
    "Systemy rynnowe",
    "Akcesoria dekarskie",
  ];

  const uslugiDekarskie = [
    "Kompleksowe pokrycia dachów",
    "Remonty dachów",
    "Obróbki blacharskie na wymiar",
    "Montaż blachodachówki",
    "Montaż papy i gontów",
    "Orynnowanie (PCV, blacha)",
  ];

  const uslugiDodatkowe = [
    "Ocieplenia dachów",
    "Roboty ciesielskie",
    "Montaż okien dachowych",
    "Czyszczenie rynien",
    "Uszczelnianie dachów",
    "Odśnieżanie",
    "Murowanie kominów",
    "Oblachowanie kominów",
  ];

  const obsługaKlienta = [
    "Dojazd do klienta",
    "Profesjonalne pomiary",
    "Bezpłatna wycena",
    "Doradztwo techniczne",
  ];

  return (
    <section id="oferta" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nasza <span className="text-accent">Oferta</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kompleksowa obsługa od dostawy materiałów po realizację projektu
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Hurtownia */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary">
                Hurtownia Dekarska
              </h3>
            </div>
            <ul className="space-y-3">
              {hurtownia.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usługi Dekarskie */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary">
                Usługi Dekarskie
              </h3>
            </div>
            <ul className="space-y-3">
              {uslugiDekarskie.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-4 bg-accent/5 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong className="text-primary">Obróbki blacharskie:</strong>{" "}
                wyginanie według życzenia klienta
              </p>
            </div>
          </div>

          {/* Usługi Dodatkowe */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary">
                Usługi Dodatkowe
              </h3>
            </div>
            <ul className="space-y-3">
              {uslugiDodatkowe.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Obsługa Klienta */}
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Pełna Obsługa</h3>
            </div>
            <ul className="space-y-4">
              {obsługaKlienta.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-100 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-gray-100 text-center">
                <strong className="text-accent">Wszystkie usługi</strong> z
                dojazdem i bezpłatną wyceną!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Potrzebujesz więcej informacji?
            </h3>
            <p className="text-gray-600 mb-6">
              Skontaktuj się z nami, aby uzyskać szczegółową ofertę dopasowaną
              do Twoich potrzeb.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:505438585"
                className="inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
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
                <span>505 438 585</span>
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Formularz kontaktowy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
