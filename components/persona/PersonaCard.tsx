'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonaInfo } from "@/lib/types/workflow";

interface PersonaCardProps {
  title: string;
  persona: PersonaInfo;
}

export function PersonaCard({ title, persona }: PersonaCardProps) {
  if (!persona) {
    return null;
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(persona).map(([section, data]) => (
            <div key={section} className="border-b pb-4 last:border-b-0">
              <h3 className="font-semibold text-lg mb-2 text-primary">{section}</h3>
              {typeof data === 'string' ? (
                <p className="text-gray-700">{data}</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(data).map(([key, value]) => (
                    <div key={key} className="bg-muted/50 p-3 rounded-lg">
                      <span className="text-sm text-gray-600 block mb-1">{key}</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}