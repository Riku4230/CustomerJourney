'use client';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkflowForm } from "@/components/workflow/WorkflowForm";
import { AnalysisResults } from "@/components/analysis/AnalysisResults";
import { AnalysisResult } from "@/lib/types/workflow";

export function HomeClient() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Card className="border-0 shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="bg-black text-white py-8">
            <CardTitle className="text-4xl font-bold text-center">
              カスタマージャーニー分析
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <WorkflowForm onAnalysisComplete={setAnalysisResult} />
          </CardContent>
        </Card>

        {analysisResult && (
          <div className="mt-12">
            <AnalysisResults data={analysisResult} />
          </div>
        )}
      </div>
    </main>
  );
}