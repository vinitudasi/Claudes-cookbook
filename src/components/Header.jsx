import chefClaudeIcon from "../assets/images/chef-claude-icon.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={chefClaudeIcon} alt="Chef Claude Icon" />
        <h1>Chef Claude</h1>
      </header>
    </>
  );
}
