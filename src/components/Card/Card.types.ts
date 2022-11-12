export type CardProps = {
  title: string;
  image: string;
  description?: string;
  size?: number;
  height?: number;
  onSubmit: () => void;
  withoutFooter?: boolean;
  date: string;
  local: string;
  geral?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  totalValue?: number;
};
