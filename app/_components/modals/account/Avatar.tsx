import React, { FC, useEffect, useState, ChangeEvent } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import clsx from "clsx";

interface AvatarProps {
  darkMode: boolean;
  url: string;
  size: number;
  onUpload: (event: ChangeEvent<HTMLInputElement>, filePath: string) => void;
}

const Avatar: FC<AvatarProps> = ({ darkMode, url, size, onUpload }) => {
  const supabase = createClient();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-4">
      {avatarUrl ? (
        <Image
          className="h-[150px] w-[150px] rounded-full md:h-[175px] md:w-[175px]"
          src={avatarUrl}
          alt="Avatar"
          width={0}
          height={0}
        />
      ) : (
        <div className="h-[150px] w-[285px] animate-pulse rounded-full bg-lines-light md:h-[175px] md:w-[322px]" />
      )}

      <div className="relative w-full">
        <label
          className={clsx(
            "flex h-12 w-full cursor-pointer items-center justify-center rounded-3xl text-primary duration-300",
            darkMode
              ? "bg-white lg:hover:bg-opacity-80"
              : "bg-secondary lg:hover:bg-primary lg:hover:bg-opacity-25",
          )}
          htmlFor="single"
        >
          {uploading ? "Uploading ..." : "Upload"}
        </label>
        <input
          className="absolute right-0 top-1/2 h-12 w-full -translate-y-1/2 cursor-pointer rounded-3xl duration-300 lg:hover:border-primary"
          style={{
            visibility: "hidden",
          }}
          id="single"
          type="file"
          accept="image/*"
          disabled={uploading}
        />
      </div>
    </div>
  );
};

export default Avatar;
