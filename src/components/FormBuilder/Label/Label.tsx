const Label = ({ id, label }: { id: string; label: string }) => {
  return (
    <label htmlFor={id} className="label my-2 block">
      <span className="label-text">{label}</span>
    </label>
  );
};

export default Label;
