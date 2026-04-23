"use client";

import Input from "@/components/input/Input";
import Output from "@/components/Output";
import { useState } from "react";

export default function Home() {

  const [data, setData] = useState({
    name : "",
    bio : "",
    skills : [],
    projects: [{ title: "", desc: "", link: "" }],
    social: {
      github: "",
      linkedin: ""
    }
  });

  return (
   <div className="flex p-6 gap-4 items-center flex-col md:flex-row">
     <Input data={data} setData={setData} />
     <Output data={data} />
   </div>
  );
}
