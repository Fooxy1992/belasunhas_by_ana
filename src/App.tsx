import { motion, useScroll, useTransform } from "motion/react";
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  Scissors, 
  Sparkles, 
  Smartphone,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Assets (replace with real paths from generation)
const HERO_IMAGE = "/src/assets/images/beauty_studio_hero_1779213730659.png";
const GALLERY_IMAGES = [
  "/src/assets/images/manicure_workboard_1779213749013.png",
  "/src/assets/images/pedicure_detail_1779213766985.png",
  "/src/assets/images/studio_details_1779213784036.png",
  "https://images.unsplash.com/photo-1604654894610-df490c81726a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1632345031435-07279639c095?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800"
];

const SERVICES = [
  { 
    title: "Manicure", 
    description: "Cuidado e limpeza profunda das cutículas e modelagem das unhas.",
    icon: <Sparkles className="w-6 h-6" />,
    price: "Desde 10€"
  },
  { 
    title: "Verniz Gel", 
    description: "Durabilidade e brilho intenso para as suas unhas por até 3 semanas.",
    icon: <Smartphone className="w-6 h-6" />,
    price: "Desde 15€"
  },
  { 
    title: "Aplicação de Gel", 
    description: "Extensão e fortalecimento com acabamento natural e resistente.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    price: "Desde 25€"
  },
  { 
    title: "Nail Art", 
    description: "Designs exclusivos e personalizados para expressar o seu estilo.",
    icon: <Sparkles className="w-6 h-6" />,
    price: "Sob consulta"
  },
  { 
    title: "Manutenção", 
    description: "Retoque e cuidado periódico para manter o gel sempre impecável.",
    icon: <Clock className="w-6 h-6" />,
    price: "Desde 20€"
  },
  { 
    title: "Pedicure", 
    description: "Tratamento completo para pés macios e unhas perfeitas.",
    icon: <Scissors className="w-6 h-6" />,
    price: "Desde 20€"
  }
];

const TESTIMONIALS = [
  { name: "Ana Silva", comment: "O melhor atendimento que já tive! A Ana é super perfecionista.", stars: 5 },
  { name: "Maria Santos", comment: "Unhas impecáveis e duradouras. O espaço é lindo e acolhedor.", stars: 5 },
  { name: "Inês Costa", comment: "Sempre saio do salão a sentir-me maravilhosa. Recomendo imenso!", stars: 5 }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacityValue = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 scroll-smooth">
      {/* Promotion Bar */}
      <div className="bg-brand-soft-gold/20 py-2 px-4 text-center text-xs font-semibold tracking-wider text-primary uppercase">
        Campanha de Primavera: -10% na primeira aplicação de Gel ✨
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-brand-soft-gold/30 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-12 h-24 flex items-center justify-between gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-heading text-2xl italic shadow-sm">B</div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-brown">Belas Unhas</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-light text-brand-secondary-text">By Ana</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-semibold">
            {['Início', 'Serviços', 'Galeria', 'Contactos'].map((item) => (
              <a 
                key={item} 
                href={`#${item === 'Início' ? '' : item.toLowerCase()}`}
                className="hover:text-brand-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              className="rounded-full px-8 bg-brand-pink hover:bg-brand-pink/90 text-white shadow-lg shadow-brand-pink/20 uppercase text-[10px] font-bold tracking-widest h-12"
              onClick={() => window.open('https://wa.me/351962135628', '_blank')}
            >
              Marcar Atendimento
            </Button>
          </div>

          <button className="md:hidden p-2 text-brand-brown" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b p-6 flex flex-col gap-4 shadow-xl"
          >
            {['Sobre', 'Serviços', 'Galeria', 'Contactos'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium"
              >
                {item}
              </a>
            ))}
            <Button 
              className="w-full rounded-full bg-brand-pink hover:bg-brand-pink/90 text-white shadow-lg shadow-brand-pink/20 uppercase text-[10px] font-bold tracking-widest h-12"
              onClick={() => window.open('https://wa.me/351962135628', '_blank')}
            >
              Marcar Atendimento
            </Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-nude">
        <div className="container mx-auto px-4 md:px-12 relative z-10 pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-bold block">
                  Estúdio Premium • Marinha Grande
                </span>
                <h1 className="text-6xl md:text-8xl font-heading leading-[1.1] text-brand-dark mb-6">
                  Beleza e <br />
                  <span className="italic text-brand-pink">Cuidado</span> em <br />
                  cada detalhe.
                </h1>
                <p className="text-brand-secondary-text text-base md:text-lg leading-relaxed max-w-sm">
                  Na Belas Unhas By Ana, cada atendimento valoriza a sua autoestima com sofisticação e luxo acessível.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="rounded-full px-12 h-16 text-xs uppercase font-bold tracking-widest bg-brand-pink hover:bg-brand-pink/90 text-white shadow-2xl shadow-brand-pink/20 focus:ring-primary/20"
                  onClick={() => window.open('https://wa.me/351962135628', '_blank')}
                >
                  Marcar Atendimento
                </Button>
              </div>

              {/* Testimonial Snapshot Styled like theme */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="p-8 bg-white rounded-[32px] shadow-sm border border-brand-soft-gold relative mt-12"
              >
                <div className="absolute -top-4 left-8 text-4xl text-brand-soft-gold font-heading italic opacity-50">“</div>
                <p className="text-sm italic text-brand-secondary-text leading-relaxed">
                  Atendimento impecável! O melhor estúdio da Marinha Grande. Saio sempre renovada e com unhas perfeitas.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-6 h-[1px] bg-brand-gold"></div>
                  <span className="text-[10px] font-bold uppercase text-brand-brown tracking-tighter">Ana Filipa Silva</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 relative"
            >
              <div className="aspect-[16/10] bg-brand-soft-gold/30 rounded-[40px] relative overflow-hidden flex items-center justify-center border-4 border-white shadow-2xl">
                <img 
                  src={HERO_IMAGE} 
                  alt="Beauty Studio" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/20 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white text-xs tracking-[0.3em] uppercase font-bold bg-brand-brown/40 backdrop-blur-md px-6 py-3 rounded-full">
                  Especialista em Nails & Design
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-nude">
                <img 
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" 
                  alt="Belas Unhas By Ana"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl z-0" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.4em] block">A Nossa Essência</span>
              <h2 className="text-4xl md:text-5xl font-heading mb-8 leading-tight text-brand-dark italic">Sofisticação dedicada a si.</h2>
              <p className="text-lg text-brand-secondary-text mb-6 leading-relaxed">
                Na Belas Unhas By Ana, cada atendimento é pensado para valorizar a beleza e autoestima das nossas clientes.
              </p>
              <p className="text-lg text-brand-secondary-text mb-8 leading-relaxed font-light">
                Trabalhamos com dedicação, cuidado e atenção aos detalhes para proporcionar uma experiência confortável e sofisticada num ambiente acolhedor e moderno.
              </p>
              <div className="grid grid-cols-2 gap-10 pt-8 border-t border-brand-soft-gold/20">
                <div className="space-y-1">
                  <h4 className="font-heading text-4xl text-brand-pink font-light">5+</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary-text font-bold">Anos de Experiência</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading text-4xl text-brand-pink font-light">2k+</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary-text font-bold">Unhas Felizes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-32 bg-brand-nude">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Menu de Cuidados</span>
            <h2 className="text-5xl md:text-6xl font-heading text-brand-dark italic">Nossos Serviços</h2>
            <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-brand-soft-gold/50 shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-[32px] bg-white overflow-hidden">
                  <CardContent className="p-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-3xl bg-brand-nude flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-heading mb-4 italic text-brand-dark">{service.title}</h3>
                    <p className="text-brand-secondary-text mb-8 text-sm leading-relaxed">{service.description}</p>
                    <div className="mt-auto px-6 py-2 rounded-full border border-brand-soft-gold text-brand-gold text-[10px] font-bold uppercase tracking-widest">
                      {service.price}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading mb-2">Transformações</h2>
              <p className="text-muted-foreground">Um vislumbre da nossa arte e dedicação.</p>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary/80 flex items-center gap-2 group">
              Ver mais no Instagram <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i}>
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div 
                      whileHover={{ scale: 0.98 }}
                      className="aspect-square rounded-2xl overflow-hidden cursor-pointer"
                    >
                      <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                    <img src={img} alt={`Gallery Full ${i}`} className="w-full h-auto" referrerPolicy="no-referrer" />
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-pink/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading mb-4 text-foreground">O que dizem as nossas clientes</h2>
            <p className="text-muted-foreground">A satisfação de quem confia na nossa arte.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Card key={i} className="border-none shadow-lg bg-white/60 backdrop-blur-sm rounded-[2rem]">
                <CardContent className="p-10 flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-6 text-brand-gold">
                    {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-lg italic leading-relaxed mb-8 text-foreground/80">"{t.comment}"</p>
                  <h4 className="font-heading text-xl font-bold">{t.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Cliente Fiel</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24" id="reservar">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-brand-nude/20">
            <div className="md:w-1/2 p-10 md:p-16 bg-white">
              <h2 className="text-3xl md:text-4xl font-heading mb-8">Reserve o seu momento</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Ex: Ana Silva" className="rounded-xl border-muted/30 focus:ring-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telemóvel</Label>
                    <Input id="phone" placeholder="912 345 678" className="rounded-xl border-muted/30" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Serviço Pretendido</Label>
                  <select id="service" className="w-full h-10 px-3 py-2 rounded-xl border border-muted/30 bg-transparent text-sm focus:ring-primary/20">
                    <option>Selecione um serviço</option>
                    <option>Verniz Gel</option>
                    <option>Gel sobre unhas naturais</option>
                    <option>Extensão Gel</option>
                    <option>Manutenção Gel</option>
                    <option>Pedicure Completa</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Observações (opcional)</Label>
                  <Textarea id="message" placeholder="Diga-nos algo mais..." className="min-h-[100px] rounded-xl border-muted/30" />
                </div>
                <Button className="w-full h-14 rounded-xl bg-primary text-white text-lg font-medium shadow-lg shadow-primary/20">
                  Enviar Pedido de Marcação
                </Button>
                <p className="text-[10px] text-muted-foreground text-center">
                  Entraremos em contacto para confirmar a sua disponibilidade o mais breve possível.
                </p>
              </form>
            </div>
            <div className="md:w-1/2 bg-brand-pink/30 flex items-center justify-center p-10 md:p-20 relative overflow-hidden">
               <div className="text-center z-10 w-full">
                 <div className="mb-8 p-6 bg-white/50 backdrop-blur-md rounded-3xl shadow-sm text-left">
                   <p className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">FAQ - Perguntas Frequentes</p>
                   <Accordion type="single" collapsible className="w-full">
                     <AccordionItem value="item-1" className="border-muted/20">
                       <AccordionTrigger className="text-sm font-semibold text-foreground">Quanto tempo demora a aplicação?</AccordionTrigger>
                       <AccordionContent className="text-sm opacity-70">Cerca de 1h a 1h30 dependendo do serviço solicitado.</AccordionContent>
                     </AccordionItem>
                     <AccordionItem value="item-2" className="border-muted/20">
                       <AccordionTrigger className="text-sm font-semibold text-foreground">Trabalham com acrílico?</AccordionTrigger>
                       <AccordionContent className="text-sm opacity-70">Trabalhamos exclusivamente com Gel e Acrigel para garantir os melhores resultados.</AccordionContent>
                     </AccordionItem>
                     <AccordionItem value="item-3" className="border-muted/20">
                       <AccordionTrigger className="text-sm font-semibold text-foreground">Aceitam pagamentos via MBWay?</AccordionTrigger>
                       <AccordionContent className="text-sm opacity-70">Sim, aceitamos MBWay, numerário e transferências bancárias.</AccordionContent>
                     </AccordionItem>
                   </Accordion>
                 </div>
                 <div className="flex flex-col items-center gap-4">
                    <div className="flex -space-x-4">
                      <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200">
                        <img src="https://i.pravatar.cc/100?u=1" className="rounded-full" referrerPolicy="no-referrer" />
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200">
                        <img src="https://i.pravatar.cc/100?u=2" className="rounded-full" referrerPolicy="no-referrer" />
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200">
                        <img src="https://i.pravatar.cc/100?u=3" className="rounded-full" referrerPolicy="no-referrer" />
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold">
                        +500
                      </div>
                    </div>
                    <p className="text-sm font-medium text-foreground">Junte-se a centenas de clientes satisfeitas.</p>
                 </div>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-soft-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contacts */}
      <section id="contactos" className="py-32">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12 bg-brand-dark p-12 md:p-20 rounded-[4rem] text-white flex flex-col md:flex-row justify-between items-center gap-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px]" />
              <div className="z-10 space-y-12 w-full md:w-auto text-center md:text-left">
                <div className="space-y-2">
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-bold">Endereço</p>
                  <p className="text-xl font-heading italic font-light hover:text-brand-gold transition-colors cursor-pointer" onClick={() => window.open('https://maps.google.com/?q=Horizonte+Ao+pé+do+Pingo+Doce,+Av.+da+Liberdade+147+Loja+18+-+C.C,+2430-326+Marinha+Grande')}>
                    Horizonte Ao pé do Pingo Doce, Av. da Liberdade 147 Loja 18 - C.C, 2430-326 Marinha Grande
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-bold">Horário Premium</p>
                  <p className="text-lg font-heading italic font-light">Seg—Sáb: 10:00 — 19:00 | Dom: Encerrado</p>
                </div>
              </div>
              <div className="h-24 w-px bg-white/10 hidden md:block" />
              <div className="z-10 flex flex-col gap-6 items-center">
                <Button size="lg" className="bg-brand-gold text-white rounded-full px-12 h-16 text-xs uppercase font-bold tracking-[0.2em] hover:scale-105 transition-transform" onClick={() => window.open('https://maps.google.com/?q=Horizonte+Ao+pé+do+Pingo+Doce,+Av.+da+Liberdade+147+Loja+18+-+C.C,+2430-326+Marinha+Grande')}>
                  Como Chegar
                </Button>
                <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-white/60">
                   <span>962 135 628</span>
                   <span className="text-brand-gold italic">Ligar Agora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-brand-nude">
        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-secondary-text">
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-gold transition-colors">TikTok</a>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-brand-gold mb-1">Belas Unhas By Ana</span>
            <span className="opacity-40">© 2026 • Marinha Grande</span>
          </div>
          <div className="flex gap-8 opacity-60">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Termos</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Fixed Button */}
      <motion.a
        href="https://wa.me/351962135628"
        target="_blank"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
      >
        <MessageCircle className="w-8 h-8" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse -z-10 opacity-20 scale-125" />
      </motion.a>
    </div>
  );
}
