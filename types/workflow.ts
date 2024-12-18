export interface WorkflowInputs {
  product: string;
  persona: string;
  value: string;
}

export interface WorkflowResponse {
  workflow_run_id: string;
  task_id: string;
  data: {
    id: string;
    workflow_id: string;
    status: 'succeeded' | 'failed' | 'running';
    outputs: {
      product: string;
      persona: string;
      value: string;
      result: string;
    };
    error: string | null;
    elapsed_time: number;
    total_tokens: number;
    total_steps: number;
    created_at: number;
    finished_at: number;
  };
}