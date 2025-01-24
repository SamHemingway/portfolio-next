"use client";
import React from "react";
import Button from "../Button";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export interface ButtonType extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  stretch?: Boolean;
  as?: string;
  variant: "cta" | "header";
}

function BookCallButton({
  children,
  stretch,
  variant,
  ...delegated
}: ButtonType) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "meet" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Button
      {...delegated}
      variant={variant}
      size={variant === "cta" ? "large" : "small"}
      stretch={stretch}
      data-cal-namespace="meet"
      data-cal-link="samhem/meet"
      data-cal-config='{"layout":"month_view"}'
    >
      {children}
    </Button>
  );
}

export default BookCallButton;
