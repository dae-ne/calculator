export interface DisplayProps {
  value: string;
}

export const Display = ({ value }: DisplayProps) => {
  return (
    <div className="display">
      <p className="display__content">{value}</p>
    </div>
  );
};
