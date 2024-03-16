"use-client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Toolbar = () => {
  return (
    <>
      <Button color='primary' className='text-lg'>
        Start for Free
      </Button>
      <Link href={"/sign-in"}>Sign In</Link>
    </>
  );
};

export default Toolbar;
