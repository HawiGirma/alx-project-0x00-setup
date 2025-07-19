import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      <div className="space-y-4">
        <Button
          title="Small Rounded-sm"
          size="small"
          shape="rounded-sm"
          styles=""
        />
        <Button
          title="Medium Rounded-md"
          size="medium"
          shape="rounded-md"
          styles=""
        />
        <Button
          title="Large Rounded-full"
          size="large"
          shape="rounded-lg"
          styles=""
        />{" "}
        {/* Must include this */}
      </div>

      <div className="mt-8">
        <Card />
      </div>
    </div>
  );
};

export default Landing;
