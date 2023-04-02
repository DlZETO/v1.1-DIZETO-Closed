import { render, screen } from "@testing-library/react";
import DashNavbar from "./components/dashboard/navbar";
import DashJumbotron from "./components/dashboard/jumbotron";
import DashAbout from "./components/dashboard/about";
import DashPortfolio from "./components/dashboard/portfolio";
import DashPricing from "./components/dashboard/pricing";
import DashTestimony from "./components/dashboard/testimony";

test("renders learn react link", () => {
  render(<DashNavbar />);
  render(<DashJumbotron />);
  render(<DashAbout />);
  render(<DashPortfolio />);
  render(<DashPricing />);
  render(<DashTestimony />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
