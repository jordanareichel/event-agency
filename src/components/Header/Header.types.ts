import { PaperProps } from '../Paper';

export type HeaderProps = {
  title?: string;
  url: string;
  isLogged: boolean;
} & PaperProps;
