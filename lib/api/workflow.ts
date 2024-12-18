import { API_CONFIG } from './config';
import { WorkflowFormData } from '@/lib/types/workflow';
import { APIError } from '@/lib/types/api';

export async function runWorkflow(inputs: WorkflowFormData) {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/workflows/run`, {
      method: 'POST',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify({
        inputs,
        response_mode: "blocking",
        user: "test-user"
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new APIError(
        errorData.message || 'API request failed',
        response.status,
        errorData
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(
      'Failed to connect to the API',
      500,
      { originalError: error }
    );
  }
}