import "../App.css";

export default function Button(btn = "btn", type = "Button") {
  return (
    <div className={type}>
      <p>[btn]</p>
    </div>
  )
}