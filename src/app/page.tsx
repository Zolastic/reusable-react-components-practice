import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-500">
      <Button>Button Default</Button>
      <Button variant="outline">Button Outline</Button>
      <Button variant="destructive">Button Destructive</Button>
      <Button variant="primary">Button Primary</Button>
      <Button variant="secondary">Button Secondary</Button>
      <Button variant="tertiary">Button Tertiary</Button>
      <Button size="sm">Button Small</Button>
      <Button size="lg">Button Large</Button>
    </main>
  );
}
