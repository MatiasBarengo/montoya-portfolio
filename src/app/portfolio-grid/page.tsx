import { Metadata } from 'next';
import PortfolioGridClient from './PortfolioGridClient';

export const metadata: Metadata = {
  title: "Portfolio Grid - Montoya Portfolio",
  description: "Browse our creative portfolio showcasing our work in strategy, branding, design, and development."
};

export default function PortfolioGridPage() {
  return <PortfolioGridClient />;
}
