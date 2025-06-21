
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type StatCardProps = {
  title: string;
  value: string;
  description: string;
  icon?: LucideIcon;
};

const StatCard = ({ title, value, description, icon: Icon }: StatCardProps) => {
  return (
    <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow text-center h-full">
      <CardHeader className="pb-2 pt-6">
        {Icon && <Icon className="w-10 h-10 mx-auto mb-2 text-corporate-600" />}
        <CardTitle className="text-4xl font-bold text-corporate-600">{value}</CardTitle>
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default StatCard;
