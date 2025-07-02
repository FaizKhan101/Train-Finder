export default function Button({ btnCaption, ...props }) {
  return <button {...props}>{btnCaption}</button>;
}
