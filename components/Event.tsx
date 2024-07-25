"use client";

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export default function Event() {
  const router = useRouter();

  const handleViewMore = () => {
    router.push('/events');
  };

  return (
    <div>
      <div>
        <div className="bg-parallax w-3/4 mx-auto mt-6 h-64">
          image
        </div>
        <div className="w-3/4 mx-auto mt-6 space-y-3">
          <p className="text-xl">Name of Topic</p>
          <div>
            <p>Date of Place</p>
            <p>Details of events brief Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ut, ipsa aperiam fugiat iste neque non vel at aliquid ratione eius totam ad labore possimus sequi deserunt tempora consectetur illum......</p>
          </div>
          <Button variant='viewMore' size='sm' onClick={handleViewMore}>View More</Button>
        </div>
      </div>
    </div>
  );
}
