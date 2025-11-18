import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  BarChart3, 
  Mail, 
  Calendar, 
  FileText, 
  Zap,
  Database,
  Lock,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Contact Management",
    description: "Centralize all customer data and interactions in one powerful platform"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and customizable reports to drive data-driven decisions"
  },
  {
    icon: Mail,
    title: "Email Integration",
    description: "Seamlessly sync with Gmail, Outlook, and other email providers"
  },
  {
    icon: Calendar,
    title: "Task Automation",
    description: "Automate repetitive tasks and workflows to save time and boost efficiency"
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Store, organize, and share documents with your team securely"
  },
  {
    icon: Zap,
    title: "Pipeline Management",
    description: "Visualize and manage your sales pipeline with drag-and-drop simplicity"
  },
  {
    icon: Database,
    title: "Custom Fields",
    description: "Tailor your CRM with unlimited custom fields to match your workflow"
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    description: "Control permissions and data access with granular security settings"
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Support for 20+ languages to serve your global team"
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-16 px-4 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From web design to digital marketing, we provide everything you need to build a powerful online presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
