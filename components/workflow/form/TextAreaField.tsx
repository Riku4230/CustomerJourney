'use client';

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

export function TextAreaField({
  id,
  label,
  value,
  onChange,
  placeholder
}: TextAreaFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-lg font-semibold">
        {label}
      </Label>
      <Textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="min-h-[200px] bg-white border-gray-200 focus:border-black focus:ring-black"
        required
      />
    </div>
  );
}