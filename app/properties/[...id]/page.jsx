"use client";
import React from "react";
import {
  useParams,
  useSearchParams,
  useRouter,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const pathname = usePathname();

  console.log("Hello World");
  console.log(4);

  return (
    <div>
      <button
        className="bg-blue-500 p-2 text-white"
        onClick={() => router.push("/")}
      >
        Go Home {pathname}
      </button>
    </div>
  );
};

export default PropertyPage;
