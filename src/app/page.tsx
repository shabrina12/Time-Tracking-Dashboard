import Card from "@/components/Card";
import Image from "next/image";
import iconWork from '../../public/images/icon-work.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <Card icon={iconWork} bgColor="bg-Light-red" title="Work" hours="32hrs" subtitle="Last Week - 36hrs" />
      </div>
    </main>
  );
}
