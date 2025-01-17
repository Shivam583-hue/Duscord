import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Duscord</h1>
      <UserButton />
      <ModeToggle />
    </div>
  );
}
