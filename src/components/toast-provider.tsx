"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./error-boundary";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <ErrorBoundary>
      {children}
      <Toaster />
    </ErrorBoundary>
  );
}
