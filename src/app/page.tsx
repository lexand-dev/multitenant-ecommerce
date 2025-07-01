import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="flex flex-col p-24 items-start gap-y-8">
      <h1 className="text-4xl font-bold">Welcome to Multitenant E-commerce!</h1>
      <p className="mt-4 text-lg">
        This is a sample application demonstrating a multitenant architecture.
      </p>
      <Button variant="elevated">hola mundo</Button>
      <Input placeholder="Type something..." className="mt-4 w-64" />
      <Progress value={50} />
      <Textarea placeholder="hola" />
      <Checkbox className="mt-4" />
    </main>
  );
}
