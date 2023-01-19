const ErrorMessage = ({ error }: { error: string | undefined }) => {
  if (!error) return null;

  return <div className="text-red-600">{error}</div>;
};

export default ErrorMessage;
