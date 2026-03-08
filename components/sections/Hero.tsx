export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary via-primary-dark to-primary-light relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Profesjonalne{" "}
            <span className="text-accent">Rozwiązania Dekarskie</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-4 text-gray-100 animate-slide-up">
            Hurtownia Dekarska + Kompleksowe Usługi
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto animate-slide-up">
            Od 2012 roku dostarczamy materiały dekarskie najwyższej jakości i
            świadczymy profesjonalne usługi dekarskie w województwie śląskim.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <a
              href="tel:505438585"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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
              <span>Zadzwoń teraz</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Bezpłatna wycena</span>
            </a>
          </div>

          {/* Key Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-accent mb-2">14+</div>
              <p className="text-gray-200">Lat doświadczenia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-gray-200">Bezpłatna wycena</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <p className="text-gray-200">Kontakt telefoniczny</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
