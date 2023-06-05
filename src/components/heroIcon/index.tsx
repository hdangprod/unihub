"use client";
import { useEffect, useState } from "react";

interface HeroIconProps {
  icon: string;
  outline?: boolean;
  mini?: boolean;
  version?: string;
  className?: string;
}

const HeroIcon: React.FC<HeroIconProps> = ({
  icon,
  outline = true,
  mini = false,
  version = "2.0.18",
  className = "w-6 h-6 text-slate-600",
  ...props
}) => {
  const [svg, setSvg] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isErrored, setIsErrored] = useState<boolean>(false);

  const fetchSvg = async (): Promise<void> => {
    try {
      const url = `https://cdn.jsdelivr.net/npm/heroicons@${version}/${
        version.startsWith("2") ? (mini ? "20/" : "24/") : ""
      }${outline ? "outline" : "solid"}/${icon}.svg`;
      const response = await fetch(url);
      const svgText = await response.text();
      setSvg(svgText);
      setIsLoaded(true);
    } catch (error) {
      setIsErrored(true);
    }
  };
  useEffect(() => {
    fetchSvg().catch((error) => {
      // Handle any errors during the fetchSvg operation
      console.error("Failed to fetch SVG:", error);
    });
  }, [icon, outline, mini, version]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svg || "" }}
      {...props}
    />
  );
};

export default HeroIcon;
