import "./BenefitCard.scss";

interface Props {
  title: string;
  description: string;
  phase: number;
}

export const BenefitCard = ({ title, description, phase }: Props) => {
  return (
    <article className="benefit-card">
      <span className="phase">
        <span>Phase</span> <span>{phase < 10 ? `0${phase}` : phase}</span>
      </span>
      <h3 className="text-2xl font-semibold mt-5">{title}</h3>
      <p className="text-lg">{description}</p>
    </article>
  );
};
