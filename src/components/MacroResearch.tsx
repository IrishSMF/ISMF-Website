import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Activity, TrendingUp, Globe } from "lucide-react";

const generateMacroData = (label: string) => [
  { name: 'Item 1', value1: 8, value2: 12, value3: 15, value4: 18 },
  { name: 'Item 2', value1: 10, value2: 14, value3: 17, value4: 20 },
  { name: 'Item 3', value1: 13, value2: 16, value3: 19, value4: 22 },
  { name: 'Item 4', value1: 16, value2: 18, value3: 21, value4: 24 },
];

const MacroChart = ({ title, data }: { title: string; data: any[] }) => (
  <Card className="p-4 hover:shadow-lg transition-shadow">
    <h4 className="text-sm font-semibold mb-3 text-center">{title}</h4>
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            fontSize: '12px'
          }}
        />
        <Bar dataKey="value1" fill="hsl(180, 70%, 70%)" />
        <Bar dataKey="value2" fill="hsl(200, 70%, 60%)" />
        <Bar dataKey="value3" fill="hsl(220, 70%, 50%)" />
        <Bar dataKey="value4" fill="hsl(220, 70%, 40%)" />
      </BarChart>
    </ResponsiveContainer>
  </Card>
);

export const MacroResearch = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Macro Research Statistics</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-time economic indicators and market data for comprehensive macroeconomic analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MacroChart title="GDP Growth Trends" data={generateMacroData("GDP")} />
          <MacroChart title="Inflation Indicators" data={generateMacroData("Inflation")} />
          <MacroChart title="Interest Rate Changes" data={generateMacroData("Rates")} />
          <MacroChart title="Employment Data" data={generateMacroData("Employment")} />
          <MacroChart title="Market Volatility" data={generateMacroData("Volatility")} />
          <MacroChart title="Currency Movements" data={generateMacroData("Currency")} />
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2">Comprehensive Market Analysis</h3>
              <p className="text-muted-foreground">
                Our research team monitors global economic indicators to inform investment decisions. 
                These real-time statistics help us identify market trends, assess risks, and uncover opportunities 
                across different sectors and geographies.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
