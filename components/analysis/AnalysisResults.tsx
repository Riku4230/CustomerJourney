'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonaCard } from "@/components/persona/PersonaCard";
import { JourneyTable } from "@/components/journey/JourneyTable";
import { AnalysisResult } from "@/lib/types/workflow";

interface AnalysisResultsProps {
  data: AnalysisResult | null;
}

export function AnalysisResults({ data }: AnalysisResultsProps) {
  if (!data) return null;

  const { personas, journeys } = data;

  return (
    <Tabs defaultValue="persona1" className="space-y-8">
      <TabsList className="grid w-full grid-cols-3 gap-4 bg-transparent p-0">
        <TabsTrigger 
          value="persona1"
          className="data-[state=active]:bg-black data-[state=active]:text-white border-2 border-black py-3 text-lg"
        >
          ペルソナ A
        </TabsTrigger>
        <TabsTrigger 
          value="persona2"
          className="data-[state=active]:bg-black data-[state=active]:text-white border-2 border-black py-3 text-lg"
        >
          ペルソナ B
        </TabsTrigger>
        <TabsTrigger 
          value="persona3"
          className="data-[state=active]:bg-black data-[state=active]:text-white border-2 border-black py-3 text-lg"
        >
          ペルソナ C
        </TabsTrigger>
      </TabsList>

      <TabsContent value="persona1" className="space-y-8">
        <PersonaCard
          title="ペルソナ A: マーケティングマネージャー"
          persona={personas.A}
        />
        <JourneyTable
          title="カスタマージャーニー - マーケティングマネージャー"
          journeyData={journeys.A}
        />
      </TabsContent>

      <TabsContent value="persona2" className="space-y-8">
        <PersonaCard
          title="ペルソナ B: デジタルマーケター"
          persona={personas.B}
        />
        <JourneyTable
          title="カスタマージャーニー - デジタルマーケター"
          journeyData={journeys.B}
        />
      </TabsContent>

      <TabsContent value="persona3" className="space-y-8">
        <PersonaCard
          title="ペルソナ C: 中小企業経営者"
          persona={personas.C}
        />
        <JourneyTable
          title="カスタマージャーニー - 中小企業経営者"
          journeyData={journeys.C}
        />
      </TabsContent>
    </Tabs>
  );
}