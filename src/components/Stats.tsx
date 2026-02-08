"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChartLine,
  faUsers,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface StatItem {
  icon: IconDefinition;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: faBriefcase,
    value: 3,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: faChartLine,
    value: 10,
    suffix: "+",
    label: "Dashboards Built",
  },
  {
    icon: faUsers,
    value: 23,
    suffix: "",
    label: "Students Mentored",
  },
  {
    icon: faMicrophone,
    value: 3,
    suffix: "x",
    label: "Speaker Sessions",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="container mx-auto px-4 mb-16">
      <div className="bg-bg-card border border-border-color rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent-blue/10 rounded-xl mb-4 group-hover:bg-accent-blue/20 transition-colors">
                <FontAwesomeIcon
                  icon={stat.icon}
                  className="text-2xl text-accent-blue"
                />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
