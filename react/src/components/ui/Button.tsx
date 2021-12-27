import classNames from 'classnames';

export type ButtonVariant = 'circle' | 'wide';

export type ButtonColor = 'primary' | 'secondary' | 'tertiary';

export type ButtonFontSize = 'small' | 'large';

export interface ButtonProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  fontSize?: ButtonFontSize;
  children?: string | number;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variant = 'circle',
  color = 'primary',
  fontSize = 'large',
  disabled,
  onClick,
  children
}: ButtonProps) => {
  return (
    <button
      className={
        classNames(
          'button',
          `button--${variant}`,
          `button--${color}`,
          `button--${fontSize}-font`
        )}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="button__inner">
        {children}
      </div>
    </button>
  );
};
