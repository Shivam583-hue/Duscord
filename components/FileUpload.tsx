"use client"

import { UploadDropzone } from "@/lib/uploadthing"
import { X } from "lucide-react"
import Image from "next/image"
import "@uploadthing/react/styles.css"

type FileUploadProps = {
  onChange: (url?: string) => void
  value: string
  endpoint: "messageFile" | "serverImage"
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {

  const fileType = value.split(".").pop();
  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image
          src={value}
          alt="Profile Image"
          className="rounded-full"
          width={200}
          height={200}
        />
        <button onClick={() => onChange("")} className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm " type="button">
          <X className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center text-center">
      <UploadDropzone
        endpoint={endpoint}

        onClientUploadComplete={(res: { url: string }[]) => {
          console.log("Upload response:", res); // Log the response
          onChange(res?.[0]?.url);
        }}
        onUploadError={(err: Error) => {
          alert("Upload failed. Please try again.");
          console.log(err)
        }}
      />
    </div>
  )
}
