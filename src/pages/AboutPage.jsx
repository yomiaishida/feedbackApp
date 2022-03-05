import Card from "../components/shared/Card";

export default function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>

        <p>
          <a href="/">back to hom</a>
        </p>
      </div>
    </Card>
  );
}
