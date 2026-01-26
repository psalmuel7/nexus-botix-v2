import Header from "./Header";

interface UnderDevelopmentProps {
  pageName: string;
}

const UnderDevelopment = ({ pageName }: UnderDevelopmentProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-4">{pageName}</h1>
          <p className="text-muted-foreground">
            This page is under development. Our developers are working to add content to this page.
          </p>
        </div>
      </main>
    </div>
  );
};

export default UnderDevelopment;
