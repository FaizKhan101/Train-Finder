export default function Input({ label, name, type, ...props }) {
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} {...props} />
    </p>
  );
}
