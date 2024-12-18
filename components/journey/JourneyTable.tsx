'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JourneyData } from "@/lib/types/workflow";

interface JourneyTableProps {
  title: string;
  journeyData: JourneyData;
}

export function JourneyTable({ title, journeyData }: JourneyTableProps) {
  if (!journeyData?.CustomerJourney || !journeyData?.Phases) {
    return null;
  }

  return (
    <Card className="mb-6 overflow-x-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px] bg-muted">カテゴリー</TableHead>
                {journeyData.Phases.map((phase) => (
                  <TableHead key={phase} className="min-w-[200px] bg-muted">
                    {phase}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(journeyData.CustomerJourney).map(([category, phases]) => (
                <TableRow key={category}>
                  <TableCell className="font-medium bg-muted/50">{category}</TableCell>
                  {journeyData.Phases.map((phase) => (
                    <TableCell key={phase} className="min-w-[200px]">
                      {phases[phase]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}