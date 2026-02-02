"use client";

export default function GlobalError() {
  return (
    <html>
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-4">
          <h1 className="text-2xl font-semibold">Algo deu errado</h1>
          <p className="text-muted-foreground">Tente recarregar a página.</p>
        </div>
      </body>
    </html>
  );
}
