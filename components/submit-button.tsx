"use client";

import React from "react";
import { Button } from "./ui/button";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="flex gap-2 h-[3rem] w-[8rem] rounded-full dark:bg-white dark:bg-opacity-10 dark:text-white"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70"></FaPaperPlane>
        </>
      )}
    </Button>
  );
}
