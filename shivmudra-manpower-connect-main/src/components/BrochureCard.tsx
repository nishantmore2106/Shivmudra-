
import { Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

type BrochureCardProps = {
  title: string;
  description: string;
  viewUrl: string;
  coverImage: string;
};

const BrochureCard = ({ title, description, viewUrl, coverImage }: BrochureCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <AspectRatio ratio={16/9} className="bg-gray-100 overflow-hidden">
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
        />
      </AspectRatio>
      <CardHeader className="pb-2 pt-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-gray-600 text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <p className="text-xs text-gray-500">
          Click below to view this brochure
        </p>
      </CardContent>
      <CardFooter className="pt-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="w-full bg-corporate-600 hover:bg-corporate-700 text-sm py-1"
              size="sm"
            >
              <Eye size={16} className="mr-2" /> View Brochure
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-[90vw]">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-md">
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default BrochureCard;
