"use client";

import { useOrganization } from "@clerk/nextjs";
import { OrgSelectionView } from "@/modules/auth/ui/views/org-selection-view";
import { AuthLayout } from "@/modules/auth/ui/layouts/auth-layout";

export const OrganizationGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectionView/>
      </AuthLayout>
    );
  }
  return <div>{children}</div>;
};
