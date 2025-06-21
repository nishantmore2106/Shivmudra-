
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type SiteCardProps = {
  title: string;
  location: string;
  image: string;
  description: string;
};

const SiteCard = ({ title, location, image, description }: SiteCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center text-corporate-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default SiteCard;
