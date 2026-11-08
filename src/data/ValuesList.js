import "../styles/About.css";
import HandshakeIcon from "@mui/icons-material/Handshake";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GroupsIcon from "@mui/icons-material/Groups";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Diversity3Icon from "@mui/icons-material/Diversity3";

const valuesList = [
  { icon: <HandshakeIcon />, title: "Respect", text: "We honor each patient, colleague, and community member, valuing their dignity, preferences, and unique needs." },
  { icon: <VerifiedUserIcon />, title: "Integrity", text: "We uphold the highest moral and ethical standards in all our practices, decisions, and interactions." },
  { icon: <GroupsIcon />, title: "Teamwork & Collaboration", text: "We prioritize collective success over individual gain, working seamlessly to achieve optimal outcomes for our patients and community." },
  { icon: <FactCheckIcon />, title: "Accountability", text: "We take full responsibility for our actions and decisions, ensuring transparency and fostering trust." },
  { icon: <VolunteerActivismIcon />, title: "Stewardship", text: "We manage resources responsibly, ensuring sustainability and maximizing benefits for those we serve." },
  { icon: <Diversity3Icon />, title: "Diversity", text: "We embrace differences, striving to better understand, represent, and serve our diverse community with inclusivity and cultural sensitivity." },
];
export default valuesList;
