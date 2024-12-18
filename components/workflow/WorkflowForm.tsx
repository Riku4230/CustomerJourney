'use client';

import { useState } from 'react';
import { TextAreaField } from "./form/TextAreaField";
import { SubmitButton } from "./form/SubmitButton";
import { runWorkflow } from '@/lib/api/workflow';
import { AnalysisResult, WorkflowFormData } from '@/lib/types/workflow';
import { parseWorkflowResponse } from '@/lib/utils/data-transformer';
import { APIError } from '@/lib/types/api';
import { useToast } from "@/hooks/use-toast";

interface WorkflowFormProps {
  onAnalysisComplete: (result: AnalysisResult) => void;
}

export function WorkflowForm({ onAnalysisComplete }: WorkflowFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<WorkflowFormData>({
    product: '',
    persona: '',
    value: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await runWorkflow(formData);
      const parsedData = parseWorkflowResponse(data);
      
      if (!parsedData) {
        throw new Error('Failed to parse response data');
      }
      
      onAnalysisComplete(parsedData);
      toast({
        title: "分析完了",
        description: "カスタマージャーニーの分析が完了しました。",
      });
    } catch (error) {
      console.error('Error:', error);
      let errorMessage = '分析中にエラーが発生しました。';
      
      if (error instanceof APIError) {
        errorMessage = `API エラー: ${error.message}`;
      }
      
      toast({
        title: "エラー",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <TextAreaField
          id="product"
          label="製品/サービス"
          value={formData.product}
          onChange={handleInputChange}
          placeholder="製品やサービスの詳細な説明を入力してください"
        />
        
        <TextAreaField
          id="persona"
          label="ターゲット層"
          value={formData.persona}
          onChange={handleInputChange}
          placeholder="想定するターゲット層の特徴や属性を詳しく入力してください"
        />
        
        <TextAreaField
          id="value"
          label="提供価値"
          value={formData.value}
          onChange={handleInputChange}
          placeholder="製品・サービスを通じて提供する価値や解決する課題を入力してください"
        />
      </div>

      <div className="text-center pt-4">
        <SubmitButton loading={loading} />
      </div>
    </form>
  );
}