import React from "react";

export const Card = ({ children }) => (
  <div className="bg-white shadow-lg p-4 rounded-lg">{children}</div>
);

export const CardHeader = ({ children }) => <div className="font-bold">{children}</div>;

export const CardTitle = ({ children }) => <h2 className="text-lg">{children}</h2>;

export const CardContent = ({ children }) => <div>{children}</div>;
