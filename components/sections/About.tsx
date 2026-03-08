export default function About() {
  return (
    <section id="o-nas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              O firmie <span className="text-accent">Secado</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-700 text-lg">
            <p className="leading-relaxed">
              <strong className="text-primary">Secado Sp. z o.o. - Śląskie Centrum Dachowe</strong> to
              profesjonalna hurtownia dekarska działająca na rynku od{" "}
              <strong>2012 roku</strong>. Przez ponad dekadę zbudowaliśmy
              silną pozycję w branży dekarskiej, oferując kompleksową obsługę
              zarówno dla firm dekarskich, jak i klientów indywidualnych.
            </p>

            <div className="bg-gray-50 border-l-4 border-accent p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Nasza misja
              </h3>
              <p className="leading-relaxed">
                Dostarczamy materiały dekarskie najwyższej jakości oraz
                świadczymy profesjonalne usługi dekarskie, które zapewniają
                trwałość i bezpieczeństwo Twojego dachu na lata.
              </p>
            </div>

            <p className="leading-relaxed">
              Nasza siedziba znajduje się w <strong>Dąbrowie Górniczej</strong>, a
              zakres naszych działań obejmuje całe{" "}
              <strong>województwo śląskie i okolice</strong>. Dysponujemy
              doświadczoną kadrą specjalistów oraz nowoczesnym sprzętem, co
              pozwala nam realizować projekty o różnym stopniu zaawansowania.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
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
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Doświadczenie
                  </h4>
                  <p className="text-gray-600">
                    Ponad 14 lat na rynku dekarskim - setki zrealizowanych
                    projektów
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Bezpłatna wycena
                  </h4>
                  <p className="text-gray-600">
                    Dojazd do klienta, profesjonalne pomiary i wycena gratis
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Profesjonalizm
                  </h4>
                  <p className="text-gray-600">
                    Wykwalifikowana kadra i nowoczesny sprzęt
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Lokalny zasięg
                  </h4>
                  <p className="text-gray-600">
                    Obsługujemy całe województwo śląskie i okolice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
