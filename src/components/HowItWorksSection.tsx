import {
  ClipboardCheck,
  MessageCircle,
  Search,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover a possibility",
    text: "Search by city, property type, price, or the feeling you are looking for.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Review with confidence",
    text: "Every listing is reviewed by our team before it becomes visible on NJW.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Start a conversation",
    text: "Send an inquiry and our team helps connect the right people privately.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Move forward clearly",
    text: "We stay close through the next steps, so there are no confusing handoffs.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="steps-section" id="how-it-works">
      <div className="section-heading">
        <div>
          <span className="section-kicker">FROM SEARCH TO NEXT STEP</span>
          <h2>A simpler way forward</h2>
        </div>
        <span className="steps-count">4 thoughtful steps</span>
      </div>
      <div className="steps-grid">
        {steps.map(({ number, icon: Icon, title, text }) => (
          <article className="step-card" key={number}>
            <span className="step-number">{number}</span>
            <Icon size={22} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
