'use client'
import React from "react";

import  Nav from "@/components/NavBar";
let resumeData = {
  "imagebaseurl":"http://bhardwaj94.github.io/",
  "firstname": "Bhardwaj",
  "lastname":"Chaudhary",
  "role": "Fullstack web developer",
  "tech":"React JS | JavaScript | Node JS",
  "email":"bhardwaj.info2cs@gmail.com",
  "contact":"(+91)-9082012401"
  }
export default function App() {
  return (
<Nav resumeData={resumeData}/>
  );
}
