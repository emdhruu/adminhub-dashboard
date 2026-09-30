interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-[1600px]">
        {children}
      </div>
    </main>
  );
}