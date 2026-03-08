# Secado Sp. z o.o. - Śląskie Centrum Dachowe

Website dla profesjonalnej hurtowni dekarskiej i usług dekarskich działającej od 2012 roku w województwie śląskim.

## 🛠️ Technologie

- **Next.js 16** z App Router
- **TypeScript** - pełne typowanie
- **Tailwind CSS 4** - nowoczesne stylowanie
- **React 19** - najnowsza wersja
- Responsywny design (mobile-first)
- SEO-optimized

## 🚀 Uruchomienie projektu

### Wymagania

- Node.js 18.x lub nowszy
- npm lub yarn

### Instalacja

1. Sklonuj repozytorium:
```bash
git clone https://github.com/Majcher-creator/Secado.git
cd Secado
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Uruchom serwer deweloperski:
```bash
npm run dev
```

4. Otwórz przeglądarkę pod adresem [http://localhost:3000](http://localhost:3000)

## 📦 Dostępne komendy

- `npm run dev` - Uruchamia serwer deweloperski
- `npm run build` - Buduje aplikację produkcyjną
- `npm run start` - Uruchamia serwer produkcyjny
- `npm run lint` - Sprawdza kod pod kątem błędów

## 📄 Struktura projektu

```
Secado/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Główny layout z Header i Footer
│   ├── page.tsx             # Strona główna
│   └── globals.css          # Globalne style CSS
├── components/              # Komponenty React
│   ├── Header.tsx          # Nawigacja (sticky header)
│   ├── Footer.tsx          # Stopka
│   └── sections/           # Sekcje strony
│       ├── Hero.tsx        # Hero section z CTA
│       ├── About.tsx       # Sekcja "O firmie"
│       ├── Offer.tsx       # Oferta (4 kategorie)
│       ├── Gallery.tsx     # Galeria realizacji
│       └── Contact.tsx     # Formularz kontaktowy + mapa
├── public/                  # Pliki statyczne
├── tailwind.config.ts      # Konfiguracja Tailwind CSS
├── tsconfig.json           # Konfiguracja TypeScript
└── next.config.ts          # Konfiguracja Next.js
```

## 🎨 Kolory marki

- **Primary (Granat)**: `#1e3a8a`
- **Primary Dark**: `#1e293b`
- **Primary Light**: `#3b82f6`
- **Accent (Pomarańczowy)**: `#f97316`
- **Accent Light**: `#fb923c`
- **Accent Dark**: `#ea580c`

## 📱 Sekcje strony

1. **Header** - Sticky navigation z logo, menu i numerem telefonu
2. **Hero** - Główna sekcja z hasłem reklamowym i przyciskami CTA
3. **O nas** - Historia firmy, misja, wyróżniki
4. **Oferta** - 4 kategorie:
   - Hurtownia dekarska
   - Usługi dekarskie
   - Usługi dodatkowe
   - Pełna obsługa klienta
5. **Galeria** - Responsywny grid z placeholderami na zdjęcia
6. **Kontakt** - Formularz, dane kontaktowe, mapa Google Maps
7. **Footer** - Linki, kontakt, social media, copyright

## 🔧 Dostosowywanie

### Dodawanie zdjęć do galerii

Zdjęcia można łatwo dodać edytując plik `components/sections/Gallery.tsx`. Obecnie wyświetlane są placeholdery - wystarczy dodać ścieżki do prawdziwych zdjęć w tablicy `galleryItems`.

### Aktualizacja danych kontaktowych

Dane firmy są zdefiniowane w następujących plikach:
- `components/Header.tsx` - Telefon w nagłówku
- `components/Footer.tsx` - Pełne dane kontaktowe
- `components/sections/Contact.tsx` - Szczegółowe dane + formularz

### Konfiguracja formularza kontaktowego

Formularz kontaktowy w `components/sections/Contact.tsx` obecnie symuluje wysyłanie. Aby podłączyć prawdziwy backend, należy zmodyfikować funkcję `handleSubmit`.

## 🌐 SEO

Strona zawiera podstawową konfigurację SEO:
- Meta tags w `app/layout.tsx`
- Open Graph tags
- Strukturalne dane
- Semantic HTML
- Alt texts (do uzupełnienia przy dodawaniu zdjęć)

## 📞 Dane kontaktowe firmy

- **Nazwa**: Secado Sp. z o.o.
- **Slogan**: Śląskie Centrum Dachowe
- **Telefon**: 505 438 585
- **Email**: info@secado.eu, dachy@secado.eu
- **WWW**: www.secado.eu, www.dachy.secado.eu
- **Adres**: ul. Reymonta 1 lok. 1, Dąbrowa Górnicza

## 🚀 Deployment

Aplikacja może być wdrożona na:
- Vercel (zalecane dla Next.js)
- Netlify
- własny serwer z Node.js

### Wdrożenie na Vercel:

```bash
npm install -g vercel
vercel
```

## 📝 Licencja

© 2026 Secado Sp. z o.o. - Wszystkie prawa zastrzeżone.

