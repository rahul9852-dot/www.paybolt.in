import { IconType } from 'react-icons';

import './CardWithWatermark.scss';

interface Props {
  title: string;
  description: string;
  icon: IconType;
}

export const CardWithWatermark = ({
  title,
  description,
  icon: Icon,
}: Props) => {
  return (
    <article className="card-with-watermark-wrapper">
      <div className="flex items-center gap-2">
        <Icon className="text-4xl text-primary" />
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <p>{description}</p>
    </article>
  );
};
