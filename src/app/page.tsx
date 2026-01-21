"use client"

import { Beams } from "@/components/ui/Beams"
import { Button } from "@/components/ui/Button"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { ShaderServiceCard } from "@/components/ui/ShaderServiceCard"
import { InteractiveNeuralVortex } from "@/components/ui/InteractiveNeuralVortex"
import { ProcessCard } from "@/components/ui/ProcessCard"
import { PremiumTestimonials } from "@/components/ui/PremiumTestimonials"
import { StarsBackground } from "@/components/ui/StarsBackground"
import { FAQItem } from "@/components/ui/FAQItem"
import { Footer } from "@/components/ui/Footer"
import { GlowingEffect } from "@/components/ui/GlowingEffect"
import { PixelCanvas } from "@/components/ui/PixelCanvas"
import { NavBar } from "@/components/ui/NavBar"
import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
import { supabase } from "@/lib/supabase"
import {
  ArrowRight,
  Sparkles,
  Phone,
  Menu,
  X,
  Share2,
  Search,
  MousePointerClick,
  FileText,
  Smartphone,
  BarChart3,
  ShoppingBag,
  Play,
  Palette,
  Building2,
  Briefcase,
  Users,
  Rocket,
  CheckCircle,
  MessageSquare,
  Settings,
  TrendingUp,
  Home as HomeIcon,
  HelpCircle
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });

      // Listen for successful bookings to save to Supabase
      cal("on", {
        action: "bookingSuccessful",
        callback: async (event: any) => {
          console.log("Cal.com Event Received:", event);
          const data = event?.detail?.data;

          if (!data) {
            console.error("No data found in Cal.com event detail");
            return;
          }

          console.log("Booking Data:", data);

          // Try to find attendee info in various possible locations
          const attendee = data.attendees?.[0] || data.booking?.attendees?.[0];

          // Get responses (it could be an object or an array of {label, value, identifier} objects)
          const rawResponses = data.responses || data.booking?.responses || {};
          const responses: any = {};

          if (Array.isArray(rawResponses)) {
            rawResponses.forEach((r: any) => {
              const key = r.identifier || r.label;
              if (key) responses[key] = r.value !== undefined ? r.value : r;
            });
          } else {
            Object.assign(responses, rawResponses);
          }

          // Fallback extraction for Name and Email if attendee object is missing
          const rawName = attendee?.name || responses?.name || data?.name || data?.booking?.name || 'Unknown';
          const rawEmail = attendee?.email || responses?.email || data?.email || data?.booking?.email;

          if (!rawEmail) {
            console.warn("Could not find email in booking data. Sync might fail.", data);
          }

          if (!supabase) {
            console.error("Supabase client is not initialized! Check your env vars.");
            return;
          }

          // Metadata (Handling variations in Cal.com payload)
          const bookingTime = data.startTime || data.start || data.booking?.startTime || null;
          const bookingId = data.uid || data.bookingId || data.id || data.booking?.id || null;
          const eventTypeId = data.eventTypeId || data.event_type_id || data.booking?.eventTypeId || null;

          console.log("Extracted Info:", { rawName, rawEmail, bookingTime, bookingId, responses });

          console.log("Syncing to Supabase...");
          const { error } = await supabase
            .from('bookings')
            .insert([
              {
                first_name: rawName.split(' ')[0] || 'Unknown',
                last_name: rawName.split(' ').slice(1).join(' ') || '',
                email: rawEmail || 'no-email@provided.com',
                phone: attendee?.phoneNumber || responses?.phone || null,

                // Custom Questions (mapping identifiers to columns)
                website_url: responses.website?.value || responses.website ||
                  responses.website_url?.value || responses.website_url ||
                  responses.websiteUrl?.value || responses.websiteUrl || null,

                company_size: responses.companySize?.value || responses.companySize || null,
                service_interested: responses.service?.value || responses.service || null,
                business_nature: responses.businessNature?.value || responses.businessNature || null,
                marketing_challenge: responses.marketingChallenge?.value || responses.marketingChallenge || null,
                growth_goal: responses.growthGoal?.value || responses.growthGoal || null,

                // Metadata
                booking_time: bookingTime,
                cal_booking_id: bookingId ? (typeof bookingId === 'number' ? bookingId : parseInt(bookingId.toString())) : null,
                event_type_id: eventTypeId ? (typeof eventTypeId === 'number' ? eventTypeId : parseInt(eventTypeId.toString())) : null,
                status: 'scheduled'
              }
            ]);

          if (error) {
            console.error('Supabase Error:', error);
          } else {
            console.log('✅ Booking successfully synced to Supabase!');
          }
        },
      });
    })();
  }, []);

  const services = [
    {
      icon: Share2,
      title: "Social Media (AI-Powered Social Media Strategy)",
      shortDescription: "We enhance traditional social media planning with AI-driven audience insights, trend analysis, and performance prediction.",
      fullDescription: "**What it is:** A data-first approach to social growth. We move beyond \"posting and hoping\" by utilizing AI algorithms to analyze engagement patterns, optimal posting times, and content performance. It is not just management; it is engineered virality.\n\n**Where is your audience:** We pinpoint your users across the digital spectrum—whether they are B2B decision-makers scrolling LinkedIn, visual buyers on Instagram/TikTok, or real-time conversationalists on X (Twitter).\n\n**How will you communicate:** Through a strategic mix of high-value carousel posts, AI-edited short-form videos (Reels/Shorts) for maximum reach, and automated, personalized community engagement to keep the conversation going 24/7.\n\n**Our Strength:** Predictive Trend Analysis. Our systems identify trending topics and audio tracks before they peak, allowing your brand to ride the wave of popularity rather than chasing it.\n\n**How we can help:** We transform your social channels from a broadcast tool into a lead-generation engine, increasing your follower count with high-intent users who are actually interested in buying.",
      learnMoreHref: "/services/social-media"
    },
    {
      icon: Search,
      title: "Search Engine Optimisation (AI-Enhanced SEO)",
      shortDescription: "We use AI-powered keyword research and content optimization to accelerate visibility on search engines.",
      fullDescription: "**What it is:** The next evolution of organic search. We combine technical expertise with Natural Language Processing (NLP) to understand exactly what your customers are asking and how search engines rank answers.\n\n**Where is your audience:** They are searching on Google, Bing, and increasingly through Voice Search (Siri/Alexa) and AI-driven answer engines like ChatGPT Search.\n\n**How will you communicate:** By restructuring your website's architecture for crawlability and creating \"Semantic Content Clusters\"—groups of highly relevant articles that establish you as the topical authority in your industry.\n\n**Our Strength:** Competitor Gap Exploitation. Our AI tools scan your competitors' sites to find the keywords they are missing or ranking poorly for, allowing us to swoop in and capture that traffic.\n\n**How we can help:** We drive sustainable, long-term traffic to your site that doesn't stop when you stop paying for ads. We get you found by the people actively looking for your solution.",
      learnMoreHref: "/services/seo"
    },
    {
      icon: MousePointerClick,
      title: "PPC (Pay-Per-Click Advertising with AI)",
      shortDescription: "AI-based bidding strategies and audience targeting reduce ad costs and maximize conversions.",
      fullDescription: "Pay-per-click marketing is a powerful paid advertising model used to build brand awareness, promote offerings, and gain instant visibility. With PPC, advertisers pay only when users click on their ads.\n\nWe use AI-based bidding strategies, audience targeting, and ad performance optimization to reduce cost per click and maximize conversions. AI allows us to identify high-intent users faster, optimize campaigns in real time, and deliver better ROI compared to traditional PPC management.",
      learnMoreHref: "/services/ppc"
    },
    {
      icon: FileText,
      title: "Content Strategy (AI-Driven Content Planning)",
      shortDescription: "AI identification of trending topics and content formats ensuring relevance and audience connection.",
      fullDescription: "Content strategy involves the planning, creation, distribution, and management of content across platforms. Our AI-powered content strategy focuses on relevance, consistency, and audience connection over time.\n\nBy using AI insights, we identify trending topics, optimal content formats, and platform-specific preferences. This ensures your content reaches the right audience faster, stays relevant longer, and builds trust across multiple social media and digital channels.",
      learnMoreHref: "/services/content-strategy"
    },
    {
      icon: Smartphone,
      title: "App & Web Design (AI-Assisted UX & Development)",
      shortDescription: "Creative websites combined with AI-assisted behavior analysis for conversion-focused experiences.",
      fullDescription: "In today's digital-first world, your website is the face of your business. We combine creativity with AI-assisted user behavior analysis, performance testing, and design optimization to build visually impressive, easy-to-navigate websites.\n\nOur process begins by understanding your business and customers, then using AI insights to design experiences that convert faster, reduce friction, and encourage repeat visits—delivering measurable results with speed and precision.",
      learnMoreHref: "/services/app-web-design"
    },
    {
      icon: BarChart3,
      title: "Infographics (AI-Optimized Visual Storytelling)",
      shortDescription: "Visually engaging content using AI-supported data structuring and visual optimization.",
      fullDescription: "Infographics transform complex or dull information into visually engaging and easy-to-understand content. We enhance infographic design using AI-supported data structuring and visual optimization.\n\nOur infographics are not only attractive but also strategically designed to communicate your brand message clearly, improve retention, and increase shareability across websites, social media, and digital reports—faster than traditional design workflows.",
      learnMoreHref: "/services/infographics"
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce Asset Creation (AI-Optimized Digital Assets)",
      shortDescription: "High-impact digital assets using AI-based consumer behavior analysis to drive conversions.",
      fullDescription: "As shopping rapidly shifts from physical stores to e-commerce platforms, persuasive digital assets play a crucial role in driving conversions. Since customers cannot touch or feel products, visuals must do the selling.\n\nWe use AI-based consumer behavior analysis and platform-specific optimization to create high-impact e-commerce assets that highlight key product benefits, answer customer questions instantly, and improve purchase confidence—leading to higher sales and lower bounce rates.",
      learnMoreHref: "/services/ecommerce"
    },
    {
      icon: Play,
      title: "Animations (AI-Enhanced Motion Content)",
      shortDescription: "Brand storytelling through animations enhanced with AI-assisted scripting and visual flow.",
      fullDescription: "We bring your brand to life through interactive and engaging animations. Our animation process is enhanced with AI-assisted scripting, visual flow optimization, and audience engagement analysis.\n\nWhether it's product animations, whiteboard videos, or explainer videos, AI helps us convey complex ideas clearly, creatively, and faster—ensuring stronger brand recall and better customer understanding.",
      learnMoreHref: "/services/animations"
    },
    {
      icon: Palette,
      title: "Brand Asset Creation (AI-Driven Visual Identity)",
      shortDescription: "Consistent, memorable brand assets using AI design consistency tools and brand intelligence.",
      fullDescription: "Brand perception is shaped by visuals—packaging, websites, and content presentation all influence how customers connect with a brand. Graphic design is the art of communicating ideas through visuals such as illustrations, typography, icons, and imagery.\n\nWe use AI-powered design consistency tools and brand intelligence to create cohesive, memorable brand assets that resonate with your audience. This ensures faster execution, consistent branding across platforms, and stronger emotional connection with customers.",
      learnMoreHref: "/services/brand-assets"
    },
  ]

  const processSteps = [
    {
      number: 1,
      icon: MessageSquare,
      title: "Share Your Requirements",
      description: "Tell us about your business goals and what you want to achieve. We listen first to understand your needs.",
      features: [
        "Free initial consultation call",
        "No-obligation discussion",
        "Quick response within 24 hours"
      ]
    },
    {
      number: 2,
      icon: FileText,
      title: "We Plan & Propose",
      description: "Based on your requirements, we create a tailored strategy with clear deliverables and timeline.",
      features: [
        "Custom strategy document",
        "Transparent pricing breakdown",
        "Clear milestones and KPIs"
      ]
    },
    {
      number: 3,
      icon: Rocket,
      title: "We Execute & Deliver",
      description: "Our team implements the strategy with regular updates and measurable results.",
      features: [
        "Dedicated project manager",
        "Weekly progress reports",
        "Continuous optimization"
      ]
    },
  ]

  const testimonials = [
    {
      quote: "GetMoreClients transformed our digital presence. Their AI-powered approach delivered results we didn't think were possible.",
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc"
    },
    {
      quote: "Clear communication, professional execution, and measurable results. Exactly what we needed for our business growth.",
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthCo"
    },
    {
      quote: "From SEO to brand design, they handled everything seamlessly. One team for all our digital needs.",
      name: "Emily Rodriguez",
      role: "Founder",
      company: "ScaleUp Studio"
    },
  ]

  const whoWeHelpDetailed = [
    {
      icon: Rocket,
      label: "Startups",
      description: "Early-stage companies looking to establish their digital presence and acquire their first customers.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      label: "Businesses",
      description: "Established companies ready to scale their marketing efforts and reach new audiences.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Briefcase,
      label: "Agencies",
      description: "Marketing agencies needing white-label services or specialized expertise for their clients.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: Users,
      label: "Founders",
      description: "Entrepreneurs and solo founders who need end-to-end digital support without managing multiple vendors.",
      color: "from-orange-500 to-pink-500"
    },
  ]

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide end-to-end digital services including Social Media Marketing, SEO, PPC Advertising, Content Strategy, App & Web Design, Infographics, E-Commerce Assets, Animations, and Brand Asset Creation — all powered by AI for better results."
    },
    {
      question: "How does the process work?",
      answer: "It's simple: You contact us with your requirement, we understand your needs and propose a solution, then we execute professionally while keeping you informed throughout the process."
    },
    {
      question: "What makes you different from other agencies?",
      answer: "We combine AI-powered strategies with human expertise, offer clear communication with a single point of contact, and focus on long-term value rather than quick fixes. No unnecessary upselling — just results."
    },
    {
      question: "How quickly can you start?",
      answer: "Once we understand your requirements and agree on the scope, we can typically start within a few days. Our streamlined process ensures no unnecessary delays."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with startups, small businesses, agencies, and established companies. Our services are tailored to your specific needs and budget."
    },
  ]

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "Result-Focused",
      description: "Every action we take is designed to deliver measurable results for your business.",
      points: ["Data-driven decisions", "ROI tracking", "Performance analytics"]
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Seasoned professionals with expertise across digital, design, and technology.",
      points: ["10+ years experience", "Certified experts", "Diverse skill sets"]
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "One point of contact, transparent updates, and no confusing jargon.",
      points: ["Weekly reports", "24h response time", "Dedicated manager"]
    },
    {
      icon: Settings,
      title: "End-to-End Execution",
      description: "From strategy to implementation, we handle everything under one roof.",
      points: ["Full-service agency", "Seamless handoffs", "Quality assurance"]
    },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#020617]">
      {/* Fixed Tubelight NavBar */}
      <NavBar
        items={[
          { name: "Home", url: "#home", icon: HomeIcon },
          { name: "Services", url: "#services", icon: Sparkles },
          { name: "How It Works", url: "#how-it-works", icon: Settings },
          { name: "Why Us", url: "#why-us", icon: CheckCircle },
          { name: "FAQ", url: "#faq", icon: HelpCircle },
          { name: "Contact", url: "/contact", icon: Phone },
        ]}
      />

      {/* ========== HERO SECTION WITH BEAMS ========== */}
      <div id="home" className="relative min-h-screen">
        {/* Beams Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Beams
            beamWidth={3}
            beamHeight={20}
            beamNumber={18}
            lightColor="#60a5fa"
            speed={2}
            noiseIntensity={1.5}
            scale={0.12}
            rotation={43}
          />
        </div>

        <nav className="relative z-20 w-full pointer-events-none">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pointer-events-none">
            <div className="flex h-20 items-center justify-between">
              {/* Brand */}
              <Link href="/" className="text-2xl font-bold text-white tracking-tight pointer-events-auto">
                Get<span className="text-blue-400">More</span>Clients
              </Link>

              {/* Spacer for desktop (NavBar is fixed at top) */}
              <div className="hidden md:block" />

              <div className="hidden md:flex items-center space-x-4 pointer-events-auto">
                <Button
                  variant="outline"
                  size="sm"
                  data-cal-namespace=""
                  data-cal-link="getmoreclients-agency/free-strategy-consultation"
                  data-cal-config='{"layout":"month_view"}'
                  className="font-semibold bg-white/5 border-white/10 hover:bg-white/10 text-white"
                >
                  Let's Talk
                  <MessageSquare className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  href="/contact"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <div className="relative z-30 flex min-h-[calc(100vh-5rem)] items-center pointer-events-none">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pointer-events-auto">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 text-sm text-white/90">
                <Sparkles className="mr-2 h-4 w-4 text-blue-400" />
                AI-Powered Digital Marketing Solutions
              </div>

              {/* Main Heading */}
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Grow Your Business{" "}
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                  with Smart
                </span>
                <br />
                Digital Marketing
              </h1>

              {/* Subtitle */}
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
                AI-powered strategies that deliver measurable results. From SEO to social media,
                we handle your digital presence so you can focus on what you do best.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-40">
                <Button
                  size="lg"
                  href="/contact"
                  className="shadow-2xl shadow-blue-500/25 font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="#services"
                  className="font-semibold bg-transparent"
                >
                  Services
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ========== SERVICES SECTION ========== */}
      <section id="services" className="relative overflow-hidden scroll-mt-24">
        <StarsBackground
          speed={80}
          factor={0.03}
          starColor="#ffffff"
          className="py-24"
        >
          {/* Decorative glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl z-0" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl z-0" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                Premium Solutions
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                Our <span className="bg-gradient-to-r from-blue-400 via-white to-cyan-400 bg-clip-text text-transparent">Digital</span> Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent mx-auto mb-6" />
              <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                Next-generation marketing frameworks powered by autonomous AI intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ShaderServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  shortDescription={service.shortDescription}
                  fullDescription={service.fullDescription}
                  learnMoreHref={service.learnMoreHref}
                  shaderIndex={index}
                />
              ))}
            </div>
          </div>
        </StarsBackground>
      </section>

      {/* ========== HOW IT WORKS SECTION ========== */}
      <section id="how-it-works" className="relative overflow-hidden scroll-mt-24">
        <StarsBackground
          speed={80}
          factor={0.03}
          starColor="#ffffff"
          className="py-24"
        >
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                A simple, transparent process designed for your success
              </p>
            </div>

            {/* Step Numbers with Connecting Line - Desktop Only */}
            <div className="hidden md:block mb-16">
              <div className="flex items-center justify-between max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/40 ring-4 ring-blue-500/20">
                    1
                  </div>
                  <span className="mt-3 text-sm font-medium text-blue-400">Contact</span>
                </div>
                <div className="flex-1 mx-4 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full shadow-sm shadow-blue-500/30" />
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/40 ring-4 ring-blue-500/20">
                    2
                  </div>
                  <span className="mt-3 text-sm font-medium text-blue-400">Plan</span>
                </div>
                <div className="flex-1 mx-4 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full shadow-sm shadow-blue-500/30" />
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/40 ring-4 ring-blue-500/20">
                    3
                  </div>
                  <span className="mt-3 text-sm font-medium text-blue-400">Deliver</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step) => (
                <ProcessCard
                  key={step.number}
                  stepNumber={step.number}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  features={step.features}
                />
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                size="lg"
                href="/contact"
                className="shadow-lg shadow-blue-500/25"
              >
                Start With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </StarsBackground>
      </section>

      {/* ========== WHO WE HELP SECTION ========== */}
      <section className="relative overflow-hidden">
        <StarsBackground
          speed={80}
          factor={0.03}
          starColor="#ffffff"
          className="py-24"
        >
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                Our Clients
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Who We Help
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                We work with businesses of all sizes looking to grow
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoWeHelpDetailed.map((item) => (
                <div
                  key={item.label}
                  className="group relative bg-black/50 border border-white/10 rounded-3xl p-8 hover:bg-black/40 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Glowing Effect */}
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />

                  <div className="relative z-10 text-center">
                    <div className="mb-6">
                      <item.icon className="h-12 w-12 text-white drop-shadow-lg mx-auto" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.label}</h3>
                    <p className="text-gray-100 text-base leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </StarsBackground>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section id="why-us" className="relative overflow-hidden scroll-mt-24">
        <StarsBackground
          speed={80}
          factor={0.03}
          starColor="#ffffff"
          className="py-24"
        >
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                Why Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Why Choose Us?
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                We deliver reliable digital services with clear communication and professional execution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className="group relative flex gap-6 p-8 bg-black/50 border border-white/10 rounded-3xl transition-all duration-300 hover:bg-black/40"
                >
                  {/* Glowing Effect */}
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />

                  <div className="relative z-10 flex gap-6">
                    <div className="flex-shrink-0">
                      <item.icon className="h-12 w-12 text-white drop-shadow-lg" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-100 text-base leading-relaxed mb-4 font-medium">{item.description}</p>

                      {/* Bullet Points */}
                      <div className="flex flex-wrap gap-2">
                        {item.points.map((point, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-white font-medium"
                          >
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Speed Comparison Section */}
            <div className="mt-16 relative group">
              <div className="relative bg-black/50 border border-white/10 rounded-3xl p-10 lg:p-12 transition-all duration-300 hover:bg-black/40">
                {/* Glowing Effect */}
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />

                <div className="relative z-10">
                  {/* Section Title */}
                  <div className="text-center mb-10">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                      3× <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Faster</span> Than Traditional Teams
                    </h3>
                    <p className="text-gray-100 text-lg max-w-2xl mx-auto font-medium">
                      We consistently ship launch-ready campaigns in just 21 days. Traditional agencies often take 3 to 6 months to reach the same point.
                    </p>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-8 max-w-3xl mx-auto">
                    {/* GetMoreClients Bar */}
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold text-sm shadow-lg shadow-green-500/30 flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        with GetMoreClients
                      </div>
                      <span className="text-2xl font-bold text-white">21 Days</span>
                    </div>

                    {/* Others Bar */}
                    <div className="flex items-center gap-6">
                      <div className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-sm text-center shadow-lg shadow-pink-500/30">
                        with others
                      </div>
                      <span className="text-2xl font-bold text-pink-400">180 Days</span>
                    </div>
                  </div>

                  {/* Bottom Note */}
                  <p className="text-center text-gray-400 text-sm mt-10 max-w-xl mx-auto">
                    *With our AI-powered workflows and experienced team, we deliver results at 8× the speed of traditional marketing agencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StarsBackground>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section id="testimonials" className="scroll-mt-24">
        <PremiumTestimonials />
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section id="faq" className="relative overflow-hidden scroll-mt-24">
        <StarsBackground
          speed={80}
          factor={0.03}
          starColor="#ffffff"
          className="py-24"
        >
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Everything you need to know about our services. Can't find the answer? Contact us directly.
              </p>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={index === 0}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-12 text-center isolate relative z-50">
              <p className="text-white/60 mb-4">Still have questions?</p>
              <Button
                href="/contact"
                size="lg"
                className="pointer-events-auto shadow-lg shadow-blue-500/25 font-semibold"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </StarsBackground>
      </section>


      {/* ========== FOOTER ========== */}
      <Footer />
    </div>
  )
}
