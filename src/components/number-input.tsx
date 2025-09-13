"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface NumberInputProps {
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export function NumberInput({
  defaultValue = 0,
  step = 5,
  min = 0,
  max = 50,
  onChange,
  className,
}: NumberInputProps) {
  const [value, setValue] = useState(defaultValue);

  const handleIncrement = () => {
    const newValue = Math.min(value + step, max);
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(value - step, min);
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number.parseInt(e.target.value) || min;
    const clampedValue = Math.min(Math.max(inputValue, min), max);
    setValue(clampedValue);
    onChange?.(clampedValue);
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        variant="outline"
        size="icon"
        onClick={handleDecrement}
        disabled={value <= min}
        className="h-10 w-10 shrink-0 bg-transparent"
      >
        <Minus className="h-4 w-4" />
      </Button>

      <Input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        step={step}
        disabled
        className="text-center w-20 border-gray-300 text-black"
      />

      <Button
        variant="outline"
        size="icon"
        onClick={handleIncrement}
        disabled={value >= max}
        className="h-10 w-10 shrink-0"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
