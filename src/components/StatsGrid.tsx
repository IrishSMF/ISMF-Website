import { Card } from "@/components/ui/card";
import { TrendingUp, PieChart, DollarSign, Users, Award, Target } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const stats = [
  {
    icon: DollarSign,
    label: "Total Assets",
    value: "---",
    change: "---",
    positive: true,
    tooltip: "Total value of all assets under management in our portfolio"
  },
  {
    icon: TrendingUp,
    label: "YTD Return",
    value: "---",
    change: "---",
    positive: true,
    tooltip: "Year-to-date return compared to our benchmark index"
  },
  {
    icon: PieChart,
    label: "Portfolio Positions",
    value: "---",
    change: "---",
    positive: true,
    tooltip: "Number of unique stocks and securities in our current portfolio"
  },
  {
    icon: Users,
    label: "Active Members",
    value: "---",
    change: "---",
    positive: true,
    tooltip: "Student analysts actively managing and researching investments"
  },
  {
    icon: Target,
    label: "Sharpe Ratio",
    value: "---",
    change: "---",
    positive: true,
    tooltip: "Risk-adjusted return metric - higher is better (measures return per unit of risk)"
  },
  {
    icon: Award,
    label: "Alpha Generated",
    value: "---",
    change: "---",
    positive: true,
    tooltip: "Excess return above market benchmark - shows our stock-picking skill"
  }
];

export const StatsGrid = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Metrics</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-time performance indicators tracking our fund's health and growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card 
                      className="p-6 hover:shadow-lg transition-all cursor-help hover:scale-105 duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className={`text-sm font-semibold ${stat.positive ? 'text-accent' : 'text-destructive'}`}>
                          {stat.change}
                        </span>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                      </div>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>{stat.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </div>
    </section>
  );
};
