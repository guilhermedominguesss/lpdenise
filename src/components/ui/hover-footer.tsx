"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#C5A059" /> {/* Gold */}
              <stop offset="25%" stopColor="#AF8883" /> {/* Rose Burnt */}
              <stop offset="50%" stopColor="#D9CFC6" /> {/* Beige Rose */}
              <stop offset="75%" stopColor="#C5A059" /> {/* Gold */}
              <stop offset="100%" stopColor="#AF8883" /> {/* Rose Burnt */}
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-stone-200 font-serif text-7xl font-bold dark:stroke-stone-800"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-[#C5A059] font-serif text-7xl font-bold 
        dark:stroke-[#C5A05999]"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-serif text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};


export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #FDFBF966 50%, #C5A05933 100%)",
      }}
    />
  );
};

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Globe,
} from "lucide-react";

export function HoverFooter() {
  const footerLinks = [
    {
      title: "Tratamentos",
      links: [
        { label: "Botox", href: "#tratamentos" },
        { label: "Harmonização Facial", href: "#tratamentos" },
        { label: "Bioestimuladores", href: "#tratamentos" },
        { label: "Harmonização Glútea", href: "#tratamentos" },
      ],
    },
    {
      title: "Links Úteis",
      links: [
        { label: "Sobre", href: "#sobre" },
        { label: "Avaliações", href: "#avaliacoes" },
        {
          label: "Agendar Agora",
          href: "https://wa.me/5511945495181?text=Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os",
          pulse: true,
        },
      ],
    },
  ];

  const contactInfo = [

    {
      icon: <Phone size={18} className="text-[#C5A059]" />,
      text: "+55 (11) 94549-5181",
      href: "tel:+5511945495181",
    },
    {
      icon: <MapPin size={18} className="text-[#C5A059]" />,
      text: "R. Costa Barros, 1174 - Vila Alpina, São Paulo - SP",
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Globe size={20} />, label: "Website", href: "#" },
  ];

  return (
    <footer className="bg-stone-900 relative h-fit overflow-hidden w-full">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-white text-3xl font-serif font-bold italic tracking-wider">Dra. Denise</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              Especialista em estética avançada, dedicada a realçar sua beleza natural com segurança e sofisticação.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-serif font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-stone-400 hover:text-[#C5A059] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white text-lg font-serif font-semibold mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-stone-400">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#C5A059] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#C5A059] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-stone-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-stone-500">
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#C5A059] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Dra. Denise. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Denise" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
