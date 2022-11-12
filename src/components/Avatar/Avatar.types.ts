import { StaticImageData } from 'next/image';

import { PaperProps } from '../Paper';

export type AvatarProps = {
  icon?: string;
  text?: string;
  image?: string | StaticImageData;
  size?: number;
  fontColor?: string;
} & Omit<PaperProps, 'size'>;
