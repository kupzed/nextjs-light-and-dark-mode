import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <div className="max-w-3xl text-center space-y-10">
        <h1 className="text-4xl font-bold">Next.js Dark Mode / Light Mode</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quos.
        </p>
        <div className="space-x-2">
          <Button>Button 1</Button>
          <Button variant="secondary">Button 2</Button>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}
