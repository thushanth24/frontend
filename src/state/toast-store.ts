'use client';

import { create } from 'zustand';

interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: 'success' | 'error';
}

interface ToastStore {
  toasts: Toast[];
  push: (toast: Omit<Toast, 'id'>) => void;
  remove: (id: string) => void;
  clear: () => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  push: (toast) =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        { id: crypto.randomUUID(), variant: 'success', ...toast }
      ]
    })),
  remove: (id) => set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) })),
  clear: () => set({ toasts: [] })
}));
