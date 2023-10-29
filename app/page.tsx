import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      Quick Cart
      <Button variant="default" size="sm">
        Check out
      </Button>
    </main>
  );
}
