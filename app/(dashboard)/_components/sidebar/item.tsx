"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
    return (
        <>
            <div className="aspect-square relative">
                <Image
                    fill
                    alt={name}
                    src={imageUrl}
                    onClick={() => {}}
                    className={cn(
                        "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
                        true && "opacity-100"
                    )}
                />
            </div>
        </>
    );
};
