
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow group h-full">
      <CardHeader className="pb-2">
        <div className="rounded-full w-12 h-12 flex items-center justify-center bg-corporate-50 text-corporate-600 mb-4 group-hover:bg-corporate-600 group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
