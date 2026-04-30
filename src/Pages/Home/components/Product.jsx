import RadialTimelineInteractive from "../../../components/ui/SimpleTimeline";
import { Calendar, Code, FileText, User, Clock } from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Planning",
    date: "Jan 2024",
    content: "Project planning and requirements gathering phase.",
    icon: Calendar,
  },
  {
    id: 2,
    title: "Design",
    date: "Feb 2024",
    content: "UI/UX design and architecture.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Development",
    date: "Mar 2024",
    content: "Core development started.",
    icon: Code,
  },
  {
    id: 4,
    title: "Testing",
    date: "Apr 2024",
    content: "Testing and bug fixing.",
    icon: User,
  },
  {
    id: 5,
    title: "Release",
    date: "May 2024",
    content: "Production deployment.",
    icon: Clock,
  },
];

const Product = () => {
  return <RadialTimelineInteractive timelineData={timelineData} />;
};

export default Product;