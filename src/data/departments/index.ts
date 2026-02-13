import meCommSystem from './meCommSystem';
import aeronautical from './aeronautical';
import biomedical from './biomedical';
import civil from './civil';
import cse from './cse';
import cseCyber from './cseCyber';
import cseAiMl from './cseAiMl';
import ece from './ece';
import eee from './eee';
import mechanical from './mechanical';
import btechAIDS from './btechAIDS';
import btechBiotech from './btechBiotech';
import btechChemical from './btechChemical';
import btechCSBS from './btechCSBS';
import btechIT from './btechIT';
import meCSE from './meCSE';
import meEnggDesign from './meEnggDesign';
import mePower from './mePower';
import meStructural from './meStructural';
import bArch from './bArch';
import mba from './mba';
import mca from './mca';
import phd from './phd';
import phdECE from './phdECE';
import phdMechanical from './phdMechanical';
import phdComputer from './phdComputer';
import defaultContent from './default';
import type { DepartmentContent } from './types';

export const departmentData: Record<string, DepartmentContent> = {
    'M.E. Communication System Engineering': meCommSystem,
    'Aeronautical Engineering': aeronautical,
    'Biomedical Engineering': biomedical,
    'Civil Engineering': civil,
    'Computer Science & Engineering': cse,
    'CSE (Cyber Security)': cseCyber,
    'CSE (AI & ML)': cseAiMl,
    'Electronics & Communication': ece,
    'Electrical & Electronics': eee,
    'Mechanical Engineering': mechanical,
    'Artificial Intelligence & Data Science': btechAIDS,
    'Biotechnology': btechBiotech,
    'Chemical Engineering': btechChemical,
    'Computer Science and Business Systems': btechCSBS,
    'Information Technology': btechIT,
    'M.E. Computer Science Engineering': meCSE,
    'M.E. Engineering Design': meEnggDesign,
    'M.E. Power Engineering': mePower,
    'M.E. Structural Engineering': meStructural,
    'Bachelor of Architecture': bArch,
    'Master of Business Administration': mba,
    'MBA Full Time': mba,
    'MBA Part Time': mba,
    'MBA Logistics and Supply Chain Management': mba,
    'Master of Computer Applications': mca,
    'Ph.D. Computer Science': phdComputer,
    'Ph.D. ECE': phdECE,
    'Ph.D. Mechanical Engineering': phdMechanical,
    'Ph.D. Chemistry': phd,
    'Ph.D. Physics': phd,
};

export const getDepartmentContent = (name: string): DepartmentContent => {
    return departmentData[name] || defaultContent;
};
