"use client";
import React, { useEffect, useState } from "react";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

type CurrencyProps = {
  value?: string | number;
};

const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="font-semibold">
      {currencyFormatter.format(Number(value))}
    </div>
  );
};

export default Currency;
