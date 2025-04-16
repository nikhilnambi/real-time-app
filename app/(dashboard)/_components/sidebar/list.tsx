"use client";

import { useOrganizationList } from "@clerk/nextjs";

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
                <p key={item.organization.id}>{item.organization.name}</p>
            ))}
        </ul>
    );
};
