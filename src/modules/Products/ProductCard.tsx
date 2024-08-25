import { IconType } from "react-icons";

import "./Products.scss";

interface Props {
  title: string;
  feat1: string;
  feat2: string;
  feat3: string;
  icon: IconType;
}

export const ProductCard = ({
  title,
  feat1,
  feat2,
  feat3,
  icon: Icon,
}: Props) => {
  return (
    <article className="product-card-wrapper">
      <div className="flex items-center gap-2">
        <Icon className="text-4xl text-primary" />
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <p className="feat">{feat1}</p>
      <p className="feat">{feat2}</p>
      <p className="feat">{feat3}</p>
    </article>
  );
};
