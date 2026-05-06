import type { TableColumn } from "@/data/types";

export const launchEventOverview = [
  { label: "Nume", value: "Le Cercle Launch Event" },
  { label: "Locație", value: "Epicrama, Stăuceni" },
  { label: "Data principală", value: "26 aprilie" },
  { label: "Date alternative", value: "9, 10, 16, 17 mai" },
  { label: "Invitați", value: "70–100" },
  {
    label: "Audiență",
    value:
      "event organizers, photographers, videographers, presenters, public people, potential partners",
  },
  { label: "Invitat special", value: "Mihail" },
  { label: "Status", value: "În planificare" },
];

export const launchTechnical = [
  { label: "Scenă", value: "înălțime 50 cm, suprafață 18 m2" },
  { label: "Ecran LED", value: "40 m2" },
];

export const launchPurpose =
  "Lansarea oficială Le Cercle prin prezentarea celor patru zone: Le Bureau, Maison du Feu, La Fonte și La Perle.";

export const launchFormat = [
  "storytelling",
  "performance",
  "interacțiune directă",
  "video artistic",
  "physical reveal",
  "actor",
  "detalii filmate live pe ecran",
];

export type LaunchTeamRow = {
  details: string;
  partner: string;
};

export const launchTeamColumns: TableColumn<LaunchTeamRow>[] = [
  { key: "partner", label: "Echipă / partener" },
  { key: "details", label: "Detalii confirmate" },
];

export const launchTeamRows: LaunchTeamRow[] = [
  { partner: "Basarab’s Dance", details: "10 dansatori, maximum 20" },
  { partner: "DOT Media Group", details: "6 persoane, foto/video/same day edit" },
  { partner: "Felyz Agency", details: "4 organizatori eveniment" },
  {
    partner: "Yucco Media",
    details: "4 persoane: DOP, gaffer, electrician, cameraman",
  },
  {
    partner: "Eventkey",
    details: "3 persoane: VJ LED engineer, sound engineer, suport tehnic",
  },
  { partner: "Le Cercle Group", details: "8 persoane" },
  { partner: "Fotografi contractați", details: "2 fotografi contractați" },
  { partner: "DJ contractat", details: "1 DJ contractat" },
];

export type LaunchTimelineRow = {
  moment: string;
  title: string;
  details: string;
};

export const launchTimelineColumns: TableColumn<LaunchTimelineRow>[] = [
  { key: "moment", label: "Moment" },
  { key: "title", label: "Secțiune" },
  { key: "details", label: "Detalii" },
];

export const launchTimelineRows: LaunchTimelineRow[] = [
  {
    moment: "18:00–19:00",
    title: "Intro / sosirea invitaților",
    details:
      "Invitații sosesc, zonele sunt acoperite / în așteptare, ecranul LED arată video ambiental cu locația și identitatea evenimentului, fourchette și drinks sunt servite.",
  },
  {
    moment: "18:55",
    title: "Anunț voiceover",
    details:
      "„In 5 minutes the Le Cercle presentation begins. Guests are invited to the green zone.”",
  },
  {
    moment: "19:00–19:20",
    title: "Act 1: Le Bureau",
    details:
      "Video artistic pe ecran, countdown, curtain reveal, lights, actor intră, dancers animă zona. Ruta: vinyl → typewriter → telephone → collections → whiskey & cigars. Detaliile sunt filmate live și afișate pe ecran.",
  },
  {
    moment: "19:22",
    title: "Anunț: Act 2 Maison du Feu",
    details: "De verificat.",
  },
  {
    moment: "19:25–19:45",
    title: "Act 2: Maison du Feu",
    details:
      "Aceeași structură de reveal, focus pe experiență caldă, socială și senzorială.",
  },
  {
    moment: "19:45",
    title: "15 min pauză",
    details: "Invitații explorează Le Bureau și Maison du Feu.",
  },
  {
    moment: "19:55–20:00",
    title: "Basarab’s Dance show",
    details: "De verificat.",
  },
  {
    moment: "20:05",
    title: "Anunț: Act 3 La Fonte",
    details: "De verificat.",
  },
  {
    moment: "20:05–20:20",
    title: "Act 3: La Fonte",
    details:
      "Reveal și prezentare interactivă. Focus pe experiență vizuală și tasting.",
  },
  {
    moment: "20:20",
    title: "Anunț: Act 4 La Perle",
    details: "De verificat.",
  },
  {
    moment: "20:20–20:40",
    title: "Act 4: La Perle",
    details: "Prezentarea zonei finale. Atmosfera devine mai relaxată și festivă.",
  },
  {
    moment: "20:40",
    title: "30 min pauză",
    details: "Invitații explorează liber toate zonele.",
  },
  {
    moment: "21:10",
    title: "Anunț",
    details: "„In 5 minutes we resume the story.”",
  },
  {
    moment: "21:15–22:00",
    title: "Moment artistic live Mihail",
    details: "De verificat.",
  },
  {
    moment: "22:00–22:05",
    title: "Discurs de mulțumire",
    details: "Le Cercle & Felyz",
  },
  {
    moment: "22:05–22:10",
    title: "Same Day Edit",
    details: "Video DOT Media Group cu momente-cheie ale serii.",
  },
  {
    moment: "22:10–23:30",
    title: "After Party",
    details:
      "DJ set, acces liber la toate zonele, networking, socializare, full experience.",
  },
];
