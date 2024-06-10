import Card from "@/components/Card";
import Image from "next/image";
import iconWork from '../../public/images/icon-work.svg'

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center">
      <div className="grid gap-12 xs:grid-cols-1 md:grid-cols-3">
        <Card icon={iconWork} bgColor="bg-Light-red" title="Work" hours="32hrs" subtitle="Last Week - 36hrs" />
        <Card icon={iconWork} bgColor="bg-Light-red" title="Work" hours="32hrs" subtitle="Last Week - 36hrs" />
        <Card icon={iconWork} bgColor="bg-Light-red" title="Work" hours="32hrs" subtitle="Last Week - 36hrs" />
        <Card icon={iconWork} bgColor="bg-Light-red" title="Work" hours="32hrs" subtitle="Last Week - 36hrs" />
      </div>
    </main>
  );
}
