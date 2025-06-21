
import StatCard from "./StatCard";
import { Award, Users, Check, MapPin } from "lucide-react";

const stats = [
  {
    title: "Years of Experience",
    value: "10+",
    description: "Serving various industries with excellence",
    icon: Award,
  },
  {
    title: "Skilled Workforce",
    value: "300+",
    description: "Trained professionals ready for deployment",
    icon: Users,
  },
  {
    title: "Client Satisfaction",
    value: "90%",
    description: "Customer retention and satisfaction rate",
    icon: Check,
  },
  {
    title: "Active Sites",
    value: "45+",
    description: "Successfully managing operations nationwide",
    icon: MapPin,
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-corporate-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Impact</h2>
          <p className="max-w-2xl mx-auto text-gray-100">
            Some numbers that showcase our expertise and reliability in the
            manpower services industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
