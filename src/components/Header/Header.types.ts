import { PaperProps } from '../Paper';

export type HeaderProps = {
  title?: string;
  isLogged: boolean;
  logout: () => void;
} & PaperProps;
