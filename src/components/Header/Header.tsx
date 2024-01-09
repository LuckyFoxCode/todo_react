import clsx from 'clsx';
import s from './Header.module.scss';

interface HeaderProps {
  className?: string;
}
export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx(s.header, className)}>
      <a href="#" className={s.header__logo}>
        LuckyFoxCode
      </a>
      <div className={s.header__profile}>👨‍💻</div>
    </header>
  );
};
