# Personalöversikt

En modern medarbetarkatalog och personalsystem med en mörk brutalistisk editorial-estetik inspirerad av Awwwards. Applikationen hanterar asynkron datainläsning, sektionsbaserad routing och modulära användarvyer.

---

## 🛠 Teknisk Stack

* **Ramverk & Byggverktyg:** [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)[cite: 2]
* **Server State & Cachning:** [TanStack Query](https://tanstack.com/query/latest)[cite: 2, 17]
* **Routing:** [React Router](https://reactrouter.com/) (`BrowserRouter`, `Routes`, `Route`, `useParams`)[cite: 2, 3, 18]
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (mörkt brutalistiskt tema med `zinc`-palett)[cite: 14, 15, 18]
* **Ikoner:** [Lucide React](https://lucide.dev/) (`Mail`, `MapPin`, `Sparkles`, `Shield`, `AtSign`, `Sliders`, `Loader2`, `AlertCircle`)[cite: 11, 12, 13, 14, 15, 17]

---

## ✨ Huvudfunktioner

* **Dynamisk vyväxling via URL:** Routingen stöder direkta kategorilänkar (`/profile`, `/address`, `/settings`) via `useParams`[cite: 3, 14, 18].
* **Villkorlig rendering i kort:** `UserCard` anpassar visat innehåll (`UserProfileView`, `UserAddressView`, `UserSettingsView`) utifrån vald kategori[cite: 15].
* **Asynkron datahantering:** Automatisk hantering av laddningstillstånd och nätverksfel via TanStack Query med en cachetid (staleTime) på 5 minuter[cite: 17].
* **Editorial UI-design:** Minimalistisk kolsvart bakgrund (`#080808`), pulsande statusindikator, monospaced mikrotypografi samt rutnätsstruktur med tunna separationslinjer[cite: 15, 16, 18].

---

## 📁 Projektstruktur

```text
src/
├── api/
│   └── FetchUsers.ts              # API-anrop och hämtningslogik
├── components/
│   ├── views/
│   │   ├── UserAddressView.tsx    # Addressvy (gatuadress, postnummer, ort)
│   │   ├── UserProfileView.tsx    # Profilvy (e-postlänk)
│   │   └── UserSettingsView.tsx   # Inställningsvy (tema, behörigheter)
│   ├── Navbar.tsx                 # Kapselformad navigeringslist med Link
│   ├── UserCard.tsx               # Användarkort med dynamisk vy och index
│   ├── UserList.tsx               # Rutnätsvisning (grid) av alla användarkort
│   └── Users.tsx                  # Datawrapper som kör useQuery
├── pages/
│   └── HomePage.tsx               # Huvudsida som läser av :category parametern
├── types/
│   └── Types.ts                   # Typdefinitioner (User, CategoryType)
├── App.tsx                        # Rotlayout med header och rutter
├── index.css                      # Globala stilar och Tailwind-direktiv
└── main.tsx                       # Applikationens startpunkt och Providers