"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="rounded-full flex items-center">
        <Icons.shopBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
