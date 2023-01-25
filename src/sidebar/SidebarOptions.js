import "../css/sidebarOptions.css";
const SidebarOptions = ({ Icon, title, number, isActive }) => {
  return (
    <div className={`sidebarOptions ${isActive && "sidebarOptions--active"}`}>
      <Icon />
      <h2>{title}</h2>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOptions;
