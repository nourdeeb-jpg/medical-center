import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import BiotechIcon from '@mui/icons-material/Biotech';
import EmergencyIcon from '@mui/icons-material/Emergency';
import GroupsIcon from '@mui/icons-material/Groups';
import HealingIcon from '@mui/icons-material/Healing';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const servicesList=[
 {title:"Primary Care & Check=ups" ,description:"Routine physicals and wellness exams",
  icon:<MedicalServicesIcon/>},
 {title:"Diagnostic Imaging & Labs",description:"blood work,X-rays,MRIs,CT scans,and ultra sounds",
  icon:<BiotechIcon/>},
 {title:"urgent & emergency care",description:"immediate treatment for sudden illnesses and injuries",
    icon:<EmergencyIcon/>},
 {title:"specialist consultation",description:"targeted care from specialized doctors like cardiologists and dermatologists",
    icon:<GroupsIcon/>},
 {title:"outpatient Surgery",description:"minor sergical procedures where patients return home same day",
    icon:<HealingIcon/>},
 {title:"physical therapy & rehabilitation",description:"recovery programs and physical rehabilitation after strokes and injuries",
    icon:<AccessibilityNewIcon/>},
];
export default servicesList;