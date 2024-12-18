import { AnalysisResult } from '@/lib/types/workflow';

function cleanJsonString(str: string): string {
  // Remove "```json" and "```" markers if they exist
  return str.replace(/```json\n?|\n?```/g, '').trim();
}

export function parseWorkflowResponse(response: any): AnalysisResult | null {
  try {
    if (!response?.data?.outputs) {
      console.error('Invalid response format:', response);
      return null;
    }

    const { text, persona1, persona2, persona3 } = response.data.outputs;

    // Clean and parse the persona data
    const cleanedText = cleanJsonString(text);
    let personaData;
    try {
      personaData = JSON.parse(cleanedText);
    } catch (e) {
      console.error('Failed to parse persona data:', e);
      return null;
    }

    // Clean and parse journey data
    let journey1, journey2, journey3;
    try {
      journey1 = JSON.parse(cleanJsonString(persona1));
      journey2 = JSON.parse(cleanJsonString(persona2));
      journey3 = JSON.parse(cleanJsonString(persona3));
    } catch (e) {
      console.error('Failed to parse journey data:', e);
      return null;
    }

    // Validate parsed data structure
    if (!personaData.ペルソナA || !personaData.ペルソナB || !personaData.ペルソナC) {
      console.error('Invalid persona data structure');
      return null;
    }

    // Validate journey data structure
    const validateJourneyData = (data: any) => {
      return data &&
        Array.isArray(data.Categories) &&
        Array.isArray(data.Phases) &&
        data.CustomerJourney &&
        typeof data.CustomerJourney === 'object';
    };

    if (!validateJourneyData(journey1) || !validateJourneyData(journey2) || !validateJourneyData(journey3)) {
      console.error('Invalid journey data structure');
      return null;
    }

    return {
      personas: {
        A: personaData.ペルソナA,
        B: personaData.ペルソナB,
        C: personaData.ペルソナC
      },
      journeys: {
        A: journey1,
        B: journey2,
        C: journey3
      }
    };
  } catch (error) {
    console.error('Error parsing workflow response:', error);
    return null;
  }
}