import styles from './Button.module.scss';

export const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseClass = styles.btn;
  const variantClass = styles[`btn--${variant}`];
  const fullWidthClass = fullWidth ? styles['btn--full'] : '';
  const classNames = [baseClass, variantClass, fullWidthClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button 
      className={classNames}
      {...props}
    >
      {children}
    </button>
  );
};