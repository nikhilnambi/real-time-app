"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

export const List = () => {
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });

    console.log("userMemberships", userMemberships);

    if (!userMemberships.data?.length) return null;

    return (
        <ul className="space-y-4">
            {userMemberships.data?.map((item) => (
                <Item
                    key={item.organization.id}
                    id={item.organization.id}
                    name={item.organization.name}
                    imageUrl={item.organization.imageUrl}
                />
            ))}
        </ul>
    );
};
