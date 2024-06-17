import Card from "@/components/Card";
import Image from "next/image";
import iconWork from '../../public/images/icon-work.svg'
import iconPlay from '../../public/images/icon-play.svg'
import iconStudy from '../../public/images/icon-study.svg'
import iconExercise from '../../public/images/icon-exercise.svg'
import iconSocial from '../../public/images/icon-social.svg'
import iconSelfCare from '../../public/images/icon-self-care.svg'
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="relative font-rubik bg-Very-dark-blue min-h-screen flex xs:flex-col lg:flex-row items-center justify-center xs:gap-4 md:gap-8 xs:p-4 md:p-12">
      <div>
        <Profile />
      </div>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xs:gap-4 sm:gap-6 md:gap-12">
          <Card icon={iconWork} bgColor="bg-Light-red" title="Work" hours="32hrs" subtitle="Last Week - 36hrs" />
          <Card icon={iconPlay} bgColor="bg-Soft-blue" title="Play" hours="10hrs" subtitle="Last Week - 10hrs" />
          <Card icon={iconStudy} bgColor="bg-Light-red2" title="Study" hours="4hrs" subtitle="Last Week - 4hrs" />
          <Card icon={iconExercise} bgColor="bg-Lime-green" title="Exercise" hours="4hrs" subtitle="Last Week - 4hrs" />
          <Card icon={iconSocial} bgColor="bg-Violet" title="Social" hours="5hrs" subtitle="Last Week - 5hrs" />
          <Card icon={iconSelfCare} bgColor="bg-Soft-orange" title="Self Care" hours="2hrs" subtitle="Last Week - 2hrs" />
      </div>
    </main>
  );
}
