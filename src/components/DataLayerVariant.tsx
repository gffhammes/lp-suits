"use client";

import { useEffect } from "react";

export interface IDataLayerVariantProps {
  variant: string;
}

export const DataLayerVariant = ({ variant = "A" }: IDataLayerVariantProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "ab_test_variant",
        variant: variant, // 'A' or 'B'
      });
    }
  }, [variant]);

  return null;
};
