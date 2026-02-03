"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Star,
  ShieldCheck,
  Heart,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/cards-1";
import { HoverFooter } from "@/components/ui/hover-footer";

import PortfolioHero from "@/components/ui/portfolio-hero";
import { Specialties } from "@/components/ui/design-testimonial";
import Bento3Section from "@/components/ui/minimal-hero-section";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

const WHATSAPP_LINK =
  "https://wa.me/5511945495181?text=Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF9]">
      <PortfolioHero />

      {/* SECTION 02 - TRATAMENTOS DESTAQUE */}
      <Specialties />

      {/* SECTION 03 - EXPERIENCIA EXCLUSIVA */}
      <Bento3Section />

      {/* SECTION 04 - OS TRATAMENTOS */}
      <section id="tratamentos" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FDFBF9] -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-24 items-end">
            <motion.div {...fadeInUp} className="space-y-6">
              <span className="text-gold font-serif italic text-xl tracking-widest uppercase">Especialidades</span>
              <h2 className="text-5xl lg:text-7xl font-serif text-stone-800 leading-[1.1]">
                A arte de refinar o que já é <span className="text-rose-burnt">belo.</span>
              </h2>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:pl-12 border-l border-stone-100"
            >
              <p className="text-xl text-stone-500 font-light leading-relaxed max-w-md">
                Protocolos exclusivos que unem tecnologia e sensibilidade artística para resultados que não gritam, mas encantam.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
            {[
              {
                title: "Botox",
                desc: "O segredo do rejuvenescimento natural. Suavize linhas de expressão com precisão milimétrica, preservando sua expressividade e revelando um olhar descansado e jovial.",
                image: "/images/botox.jpg",
                cols: "md:col-span-7",
                number: "01",
              },
              {
                title: "Harmonização Facial",
                desc: "A arquitetura da face em sua melhor versão. Estratégias personalizadas para equilibrar traços, repor volumes e realçar sua beleza única de forma sutil e elegante.",
                image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
                cols: "md:col-span-5",
                number: "02",
              },
              {
                title: "Bioestimuladores de Colágeno",
                desc: "Beleza que vem de dentro para fora. Protocolos com Sculptra para regenerar a firmeza e a densidade da pele, garantindo um efeito lifting duradouro e natural.",
                image: "/images/bioestimuladores.png",
                cols: "md:col-span-5",
                number: "03",
              },
              {
                title: "Harmonização Glútea",
                desc: "O contorno corporal dos seus sonhos. Projeção, volume e melhora da textura da pele com técnicas avançadas para resultados harmônicos e uma silhueta impecável.",
                image: "/images/gluteo.jpg",
                cols: "md:col-span-7",
                number: "04",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`${card.cols} group relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl shadow-stone-200/50`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <span className="font-serif italic text-2xl text-gold/80">{card.number}</span>
                    <Sparkles className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl lg:text-4xl font-serif leading-tight">{card.title}</h3>
                    <p className="text-stone-200 text-lg font-light leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {card.desc}
                    </p>
                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <Button
                        asChild
                        className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-stone-900 rounded-full px-8 py-6 text-lg transition-all"
                      >
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver Detalhes
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 - DIFERENCIAL / SOBRE */}
      <section id="sobre" className="py-32 bg-[#FDFBF9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/dra-denise-1.jpeg"
                  alt="Dra. Denise"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-0" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-rose-burnt/5 rounded-full blur-2xl -z-0" />
            </div>

            <motion.div {...fadeInUp} className="space-y-10">
              <div className="space-y-6">
                <span className="text-gold font-serif italic text-xl tracking-wide">Excelência e Sensibilidade</span>
                <h2 className="text-4xl lg:text-6xl font-serif text-stone-800 leading-tight">
                  A ciência por trás do seu <span className="text-rose-burnt">melhor momento.</span>
                </h2>
                <p className="text-lg text-stone-600 font-light leading-relaxed">
                  Com mais de 8 anos de experiência, a Dra. Denise une o rigor técnico da estética avançada a um olhar artístico e humanizado. Cada procedimento é uma busca pela harmonia que já existe em você.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                {[
                  { icon: ShieldCheck, title: "Protocolos Exclusivos", text: "Atendimento 100% personalizado para suas necessidades." },
                  { icon: Star, title: "Trajetória", text: "8 anos transformando vidas através da estética." },
                  { icon: Heart, title: "Olhar Humanizado", text: "Cuidado genuíno em cada etapa da sua jornada." },
                  { icon: Sparkles, title: "Tecnologia de Ponta", text: "Os melhores equipamentos e técnicas do mercado." },
                ].map((item, i) => (
                  <div key={i} className="space-y-3 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gold group-hover/item:bg-gold group-hover/item:text-white transition-colors duration-300 border border-stone-100">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-stone-800">{item.title}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-rose-burnt hover:bg-stone-800 text-white rounded-full px-10 h-14 transition-all duration-300 shadow-lg shadow-rose-burnt/10"
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar minha avaliação
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 06 - CONFIANÇA & ACOLHIMENTO */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif text-stone-800 mb-6">
              Aqui, você se sente segura desde o primeiro contato.
            </h2>
            <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto italic">
              O que mais escuto das minhas pacientes não é sobre o procedimento, é sobre carinho, confiança e tranquilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            [{
              { title: "Atendimento Premium", category: "Experiência", src: "/images/experiencia.jpeg" },
              { title: "Clínica Premium", category: "Clínica", src: "/images/clínica.jpeg" },
              { title: "Tecnologia de Ponta", category: "Equipamentos", src: "/images/equipamentos.jpeg" },
              { title: "Ambiente Acolhedor", category: "Ambiente", src: "/images/ambiente.jpeg" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProductCard
                  title={item.title}
                  category={item.category}
                  imageUrl={item.src}
                  href="#tratamentos"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 - CTA FINAL */}
      <section className="py-32 bg-[#FDFBF9]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-stone-800 text-center text-4xl lg:text-7xl font-serif tracking-tight leading-[1.1] max-w-4xl"
          >
            Você não precisa mudar quem vocé é. <br />
            <span className="text-rose-burnt italic">Precisa apenas cuidar de si.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-rose-burnt hover:bg-stone-800 text-white rounded-full px-12 h-16 text-xl transition-all duration-500 shadow-xl shadow-rose-burnt/10 font-medium"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Agendar minha avaliação
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <HoverFooter />

      {/* WHATSAPP BUTTON */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors"
      >
        <MessageSquare className="w-8 h-8" />
      </motion.a>
    </main>
  );
}
