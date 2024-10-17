import '../App.css';
import Btn from './Button';

export default function NavigationBar() {
  return (
    <div className="Navigation-bar">
      <Btn title="header" />
      <Btn />
      <Btn color="#BADA55" />
    </div>
  )
}