import { IconType } from "react-icons";
import arrow from "@public/images/arrow.svg";

import "./GradientCard.scss";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  classNames?: string;
}

export const GradientCard = ({ description, icon: Icon, title }: Props) => {
  return (
    <article className="gradient-card">
      <Icon className="icon" />
      <span className="watermark" />
      <div className="flex flex-col gap-5 items-start justify-center">
        <h4 className="title">
          <Image src={arrow} className="arrow" alt="arrow" />
          <span>{title}</span>
        </h4>
        <p>{description}</p>
      </div>
    </article>
  );
};
