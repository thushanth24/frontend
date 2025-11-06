import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-8 sm:px-10">
        {children}
      </div>
    </div>
  );
}
