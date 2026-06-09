const contactPhone = "+91 98765 43210";
const contactEmail = "info@yourtravelvisas.com";

const visaCountries = [
  { name: "Malaysia", slug: "malaysia", region: "asia", image: "malaysia.webp", type: "eVisa / Tourist Visa", summary: "Ideal for short holidays, family visits and business meetings.", documents: ["Passport with validity", "Recent photo", "Travel dates", "Hotel or stay details"], faqs: ["Can I apply for a Malaysia visa online?", "Do I need confirmed tickets before applying?"] },
  { name: "Singapore", slug: "singapore", region: "asia", image: "singapore.webp", type: "Tourist / Business Visa", summary: "A clean application process for leisure trips, events and business travel.", documents: ["Passport copy", "Photo", "Employment or business proof", "Travel itinerary"], faqs: ["How early should I apply for Singapore visa?", "Is bank statement required?"] },
  { name: "Thailand", slug: "thailand", region: "asia", image: "thailand.webp", type: "Tourist Visa", summary: "Suitable for holidays, family trips and short travel plans.", documents: ["Passport", "Photo", "Travel booking details", "Stay information"], faqs: ["Which Thailand visa type suits tourists?", "Can families apply together?"] },
  { name: "Vietnam", slug: "vietnam", region: "asia", image: "vietnam.webp", type: "eVisa", summary: "Simple assistance for Vietnam tourist and short-stay travel.", documents: ["Passport scan", "Photo", "Arrival date", "Entry port details"], faqs: ["Is Vietnam eVisa available for tourists?", "Can I enter from any airport?"] },
  { name: "Japan", slug: "japan", region: "asia", image: "japan.webp", type: "Tourist Visa", summary: "Detailed document support for Japan holidays and family travel.", documents: ["Passport", "Photo", "Bank statement", "Itinerary and stay proof"], faqs: ["Does Japan visa need financial documents?", "Can I submit a planned itinerary?"] },
  { name: "Cambodia", slug: "cambodia", region: "asia", image: "cambodia.webp", type: "Tourist Visa", summary: "Quick guidance for Cambodia leisure trips and short stays.", documents: ["Passport", "Photo", "Travel date", "Contact details"], faqs: ["Is Cambodia visa suitable for tourism?", "What details are needed to begin?"] },
  { name: "Philippines", slug: "philippines", region: "asia", image: "philippines.webp", type: "Visit Visa", summary: "Support for tourist, family visit and short travel applications.", documents: ["Passport", "Photo", "Income proof", "Travel plan"], faqs: ["Who needs a Philippines visa?", "Are supporting documents checked?"] },
  { name: "Sri Lanka", slug: "srilanka", region: "asia", image: "srilanka.webp", type: "ETA / Tourist", summary: "Convenient assistance for Sri Lanka holidays and short visits.", documents: ["Passport", "Travel dates", "Accommodation details", "Basic traveller information"], faqs: ["Is Sri Lanka ETA travel-ready?", "Can I apply before booking hotels?"] },
  { name: "Maldives", slug: "maldives", region: "asia", image: "maldives.webp", type: "Tourist Support", summary: "Guidance for Maldives travel requirements and documentation.", documents: ["Passport", "Hotel confirmation", "Return travel plan", "Traveller details"], faqs: ["What should I carry for Maldives travel?", "Do resort bookings matter?"] },
  { name: "Bhutan", slug: "bhutan", region: "asia", image: "bhutan.webp", type: "Travel Permit", summary: "Permit and document guidance for Bhutan travel plans.", documents: ["Valid ID or passport", "Photo", "Travel dates", "Hotel details"], faqs: ["Do Indian travellers need a permit?", "Can families be processed together?"] },
  { name: "Hong Kong", slug: "hong-kong", region: "asia", image: "hongkong.webp", type: "Visit Visa", summary: "Support for visit visa enquiries, document checks and travel purpose guidance.", documents: ["Passport", "Photo", "Financial proof", "Travel purpose details"], faqs: ["Is Hong Kong visa based on nationality?", "What documents support a visit visa?"] },
  { name: "Bali", slug: "bali", region: "asia", image: "bali.webp", type: "Indonesia Visa", summary: "Travel assistance for Bali and Indonesia holiday requirements.", documents: ["Passport", "Photo", "Arrival date", "Stay details"], faqs: ["Is Bali visa different from Indonesia visa?", "What details are needed before travel?"] },
  { name: "Dubai", slug: "dubai", region: "gulf", image: "dubai.webp", type: "UAE Visa", summary: "Popular visa assistance for Dubai holidays, family visits and business travel.", documents: ["Passport", "Photo", "Travel date", "Accommodation or sponsor details"], faqs: ["Which Dubai visa duration should I choose?", "Can I apply for family members?"] },
  { name: "Saudi Arabia", slug: "saudi-arabia", region: "gulf", image: "saudi.webp", type: "Visit Visa", summary: "Guidance for Saudi visit travel, family visits and short-stay requirements.", documents: ["Passport", "Photo", "Travel purpose", "Supporting details"], faqs: ["What Saudi visa category should I choose?", "Are document rules different by purpose?"] },
  { name: "Turkey", slug: "turkey", region: "europe", image: "turkey.webp", type: "Tourist Visa", summary: "Application support for Turkey tourism and short business travel.", documents: ["Passport", "Photo", "Financial documents", "Itinerary"], faqs: ["Can I apply for Turkey visa online?", "Does eligibility depend on passport type?"] },
  { name: "Azerbaijan", slug: "azerbaijan", region: "europe", image: "azerbaijan.webp", type: "eVisa", summary: "Smooth eVisa support for Azerbaijan short stays and holidays.", documents: ["Passport scan", "Photo", "Travel dates", "Traveller details"], faqs: ["Is Azerbaijan eVisa suitable for tourists?", "How do I avoid application errors?"] },
  { name: "Schengen", slug: "schengen", region: "europe", image: "europe.webp", type: "Schengen Visa", summary: "Detailed support for Schengen travel files, appointment preparation and itinerary planning.", documents: ["Passport", "Photo", "Bank statement", "Travel insurance", "Itinerary and stay proof"], faqs: ["Which Schengen country should I apply through?", "Do I need travel insurance?"] },
  { name: "France", slug: "france", region: "europe", image: "france.webp", type: "Schengen Visa", summary: "France visa assistance for tourism, family visits and business travel.", documents: ["Passport", "Photo", "Financial proof", "Hotel and flight itinerary"], faqs: ["Is France part of Schengen visa process?", "What if I visit multiple countries?"] },
  { name: "Italy", slug: "italy", region: "europe", image: "italy.webp", type: "Schengen Visa", summary: "Support for Italy tourist files, itinerary review and document preparation.", documents: ["Passport", "Photo", "Bank statement", "Travel insurance", "Stay proof"], faqs: ["Can Italy be my main destination?", "Are cover letters useful?"] },
  { name: "Greece", slug: "greece", region: "europe", image: "greece.webp", type: "Schengen Visa", summary: "Travel support for Greece holidays, honeymoon plans and Schengen documentation.", documents: ["Passport", "Photo", "Financial proof", "Travel insurance", "Itinerary"], faqs: ["Is Greece visa a Schengen visa?", "What documents support holiday travel?"] },
  { name: "Spain", slug: "spain", region: "europe", image: "spain.webp", type: "Schengen Visa", summary: "Guidance for Spain tourism, family visits and business visa documentation.", documents: ["Passport", "Photo", "Bank statement", "Accommodation proof", "Travel insurance"], faqs: ["Can I visit other Schengen countries with Spain visa?", "How should I show travel plans?"] },
  { name: "Switzerland", slug: "switzerland", region: "europe", image: "switzerland.webp", type: "Schengen Visa", summary: "Premium document preparation for Switzerland travel and multi-country Schengen plans.", documents: ["Passport", "Photo", "Financial proof", "Travel insurance", "Detailed itinerary"], faqs: ["Is Switzerland in Schengen?", "What makes a strong travel file?"] },
  { name: "United Kingdom", slug: "uk", region: "europe", image: "uk.webp", type: "UK Visitor Visa", summary: "Detailed support for UK visitor visa files and travel purpose documentation.", documents: ["Passport", "Photo", "Financial documents", "Employment or business proof", "Travel purpose"], faqs: ["How detailed should my UK visa file be?", "Can I apply for family visit purposes?"] },
  { name: "Australia", slug: "australia", region: "oceania", image: "australia.webp", type: "Visitor Visa", summary: "Complete guidance for Australia visitor visa enquiries and document preparation.", documents: ["Passport", "Photo", "Financial proof", "Employment details", "Travel plan"], faqs: ["Which Australia visitor visa stream applies?", "Are financial documents important?"] },
  { name: "New Zealand", slug: "new-zealand", region: "oceania", image: "newzealand.webp", type: "Visitor Visa", summary: "Support for New Zealand visitor applications, family travel and holiday documentation.", documents: ["Passport", "Photo", "Financial proof", "Itinerary", "Stay details"], faqs: ["Can I apply for New Zealand visitor visa online?", "What documents show travel purpose?"] }
];

const grid = document.querySelector("#visaGrid");
const searchInput = document.querySelector("#countrySearch");
const heroSearch = document.querySelector("#heroSearch");
const destinationSelect = document.querySelector("#destinationSelect");
const emptyState = document.querySelector("#emptyState");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
let currentFilter = "all";
let openCard = "";

function pageLink(country){return `visa-pages/${country.slug}.html`;}

function splitHeroTitle(){
  const title = document.querySelector(".animated-title");
  if(!title || title.dataset.animated === "true") return;
  const words = title.textContent.trim().split(/\s+/);
  title.innerHTML = words.map((word, index) => `<span class="reveal-word" style="animation-delay:${index * 0.09}s">${word}</span>`).join(" ");
  title.dataset.animated = "true";
}

function renderCountries(){
  if(!grid) return;
  const query = (searchInput?.value || "").trim().toLowerCase();
  const filtered = visaCountries.filter(country => {
    const haystack = `${country.name} ${country.type} ${country.region}`.toLowerCase();
    return (currentFilter === "all" || country.region === currentFilter) && haystack.includes(query);
  });

  grid.innerHTML = filtered.map(country => {
    const isOpen = openCard === country.slug;
    return `
      <article class="visa-card ${isOpen ? "is-open" : ""}" id="${country.slug}" data-name="${country.name}">
        <img src="images/${country.image}" alt="${country.name} visa" loading="lazy" />
        <div class="visa-card-content">
          <p class="country-region">${country.region}</p>
          <h3>${country.name} Visa</h3>
          <p>${country.type}</p>
          <div class="card-meta"><span>Checklist support</span><span>Enquiry ready</span></div>
          <div class="card-actions">
            <button class="btn card-enquire" type="button" data-enquire="${country.name}">Enquire</button>
            <button class="btn card-details" type="button" data-toggle-details="${country.slug}">${isOpen ? "Hide" : "Details"}</button>
          </div>
          <div class="visa-details-panel">
            <p>${country.summary}</p>
            <b>Basic document checklist</b>
            <ul>${country.documents.map(item => `<li>${item}</li>`).join("")}</ul>
            <b>FAQs</b>
            <div class="faq-list">${country.faqs.map(q => `<details><summary>${q}</summary><p>Our team will confirm the latest requirement based on your passport, travel purpose and date of travel.</p></details>`).join("")}</div>
            <div class="detail-contact">
              <a href="tel:${contactPhone.replace(/\s/g, "")}">Call now</a>
              <a href="mailto:${contactEmail}?subject=${encodeURIComponent(country.name + " visa enquiry")}">Email us</a>
              <a href="${pageLink(country)}" class="view-more">View more</a>
            </div>
          </div>
        </div>
      </article>`;
  }).join("");
  if(emptyState) emptyState.style.display = filtered.length ? "none" : "block";
}

function populateDestinations(){
  if(!destinationSelect) return;
  destinationSelect.innerHTML = `<option value="">Choose country</option>` + visaCountries.map(country => `<option value="${country.name}">${country.name}</option>`).join("");
}

function jumpToCountry(value){
  const searchValue = (value || "").trim().toLowerCase();
  const country = visaCountries.find(item => item.slug === searchValue || item.name.toLowerCase() === searchValue || item.name.toLowerCase().includes(searchValue));
  if(!country) return;
  currentFilter = "all";
  openCard = country.slug;
  document.querySelectorAll(".filter-pills button").forEach(btn => btn.classList.toggle("active", btn.dataset.filter === "all"));
  if(searchInput) searchInput.value = country.name;
  renderCountries();
  document.querySelector("#countries")?.scrollIntoView({behavior:"smooth"});
}

document.querySelectorAll(".filter-pills button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-pills button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    openCard = "";
    renderCountries();
  });
});

searchInput?.addEventListener("input", () => {openCard = ""; renderCountries();});
document.querySelector("#clearSearch")?.addEventListener("click", () => {searchInput.value = ""; openCard = ""; renderCountries(); searchInput.focus();});
document.querySelector("#heroSearchBtn")?.addEventListener("click", () => jumpToCountry(heroSearch?.value));
heroSearch?.addEventListener("keydown", event => {if(event.key === "Enter") jumpToCountry(heroSearch.value);});

document.addEventListener("click", event => {
  const enquireBtn = event.target.closest("[data-enquire]");
  const detailsBtn = event.target.closest("[data-toggle-details]");
  if(enquireBtn){
    if(destinationSelect) destinationSelect.value = enquireBtn.dataset.enquire;
    document.querySelector("#enquiry")?.scrollIntoView({behavior:"smooth"});
  }
  if(detailsBtn){
    openCard = openCard === detailsBtn.dataset.toggleDetails ? "" : detailsBtn.dataset.toggleDetails;
    renderCountries();
    setTimeout(() => document.querySelector(`#${detailsBtn.dataset.toggleDetails}`)?.scrollIntoView({behavior:"smooth", block:"center"}), 30);
  }
});

menuToggle?.addEventListener("click", event => {
  navLinks?.classList.toggle("open");
  menuToggle.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", navLinks?.classList.contains("open") ? "true" : "false");
});

document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => {
  navLinks?.classList.remove("open");
  menuToggle?.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

document.querySelector("#enquiryForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const note = document.querySelector("#formNote");
  if(note) note.textContent = "Thank you. Your visa enquiry has been captured.";
  event.currentTarget.reset();
});

splitHeroTitle();
populateDestinations();
renderCountries();
