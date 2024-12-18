'use client';

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  loading: boolean;
}

export function SubmitButton({ loading }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={loading}
      className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg rounded-lg transition-all"
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          分析中...
        </>
      ) : (
        'カスタマージャーニーを分析'
      )}
    </Button>
  );
}