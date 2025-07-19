import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Button title="Small Button" size="small" shape="rounded-sm" styles="" />
      <Button
        title="Medium Button"
        size="medium"
        shape="rounded-md"
        styles=""
      />
      <Button title="Large Button" size="large" shape="rounded-lg" styles="" />
      <Button title="Large Button" size="full" shape="rounded-full" styles="" />
    </div>
  );
};

export default Landing;
