"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowLeft, Calendar, Clock, Sparkles, Search, Share2,
    Target, Send, ArrowRight, Zap, CheckCircle2, ChevronRight,
    TrendingUp, ExternalLink, MessageCircle, DollarSign, Users, Brain,
    AlertTriangle, ArrowRightCircle, Globe, Download, Mail, FileText
} from "lucide-react";
import { useRef } from "react";

const blogContentData: Record<string, any> = {
    "10-ai-powered-seo-strategies-for-2026": {
        title: "10 AI-Powered SEO Strategies That Will Dominate Search in 2026",
        category: "SEO",
        date: "Jan 19, 2026",
        readTime: "12 min read",
        author: {
            name: "Marcus Chen",
            role: "Founder & Growth Strategist",
            image: "/authors/marcus.jpg" // Fallback to initial if not found
        },
        metaDescription: "Explore how AI-driven intent modeling, predictive analytics, and semantic clustering are redefining search engine optimization for the next era.",
        featuredImage: {
            url: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc",
            caption: "Advanced SEO strategy integrating machine learning and predictive growth metrics."
        },
        heroIntroduction: [
            "Search engine optimization is entering a transformative era. In 2026, the traditional boundaries between technical SEO, content marketing, and user psychology have dissolved into a single, cohesive discipline powered by artificial intelligence.",
            "As search engines evolve into 'answer engines,' your strategy must shift from static keyword matching to dynamic, AI-driven engagement that satisfies both algorithmic precision and human curiosity."
        ],
        strategies: [
            {
                id: 1,
                heading: "AI-Powered Keyword Intelligence",
                content: "Traditional keyword research has evolved into semantic clustering. Instead of targeting individual phrases, brands must master topical clusters. AI models allow us to map the relationships between thousands of related search terms, ensuring comprehensive coverage of user intent."
            },
            {
                id: 2,
                heading: "Search Intent Modeling",
                content: "Machine learning can now interpret the subtle nuances of intent—distinguishing between users who want to learn, compare, or buy. Content must match these journey stages perfectly to maintain search authority in 2026."
            },
            {
                id: 3,
                heading: "Predictive Content Optimization",
                content: "AI allows us to predict content performance before publication. By analyzing emerging web trends, we identify rising topics and structures that will resonate most with search algorithms and readers alike."
            }
        ],
        callouts: [
            {
                type: "tip",
                title: "SEO Pro Tip",
                content: "Optimize for 'Zero-Click' searches by structuring data for AI snippets while maintaining clear conversion pathways for users who need deeper insights."
            }
        ],
        expertInsight: "While AI tools are available to everyone, the true advantage lies in strategic data interpretation. In 2026, successful brands combine AI speed with human nuance to navigate complex market dynamics.",
        conclusion: "The shift to AI-powered search intelligence is a fundamental change. Success requires moving away from short-term hacks and embracing a durable, data-driven system built for the long term.",
        cta: {
            headline: "Want This Strategy Applied to Your Business?",
            subtext: "Our experts are already implementing these AI strategies for leading brands.",
            buttonText: "Get a Free SEO Audit"
        }
    },
    "the-future-of-social-media-marketing": {
        title: "The Future of Social Media Marketing in an AI-Driven World",
        category: "Social Media",
        date: "Jan 12, 2026",
        readTime: "14 min read",
        author: {
            name: "Sarah Mitchell",
            role: "Head of Social Strategy",
            image: "/authors/sarah.jpg"
        },
        metaDescription: "Discover how AI is transforming social media engagement, growth strategies, and brand visibility in 2026 and beyond.",
        featuredImage: {
            url: "/images/blog-social-media-hero.png",
            caption: "Social media platform icons including Facebook, YouTube, Instagram, LinkedIn, TikTok, and Twitter."
        },
        heroIntroduction: [
            "Social media has evolved far beyond posting content and hoping for engagement. In 2026, the most successful brands are leveraging artificial intelligence to build predictive, data-driven growth engines that turn followers into customers.",
            "From real-time sentiment analysis to automated content optimization, AI is rewriting the rules of social media marketing—and the brands that adapt fastest will dominate their markets."
        ],
        sections: [
            {
                id: 1,
                heading: "Introduction: The AI-Social Media Revolution",
                content: "The social media landscape of 2026 looks nothing like it did five years ago. Platform algorithms have become exponentially smarter, audience attention spans have grown more selective, and the volume of content competing for visibility has reached unprecedented levels.",
                bullets: [
                    "Over 4.5 billion active social media users worldwide",
                    "Average user spends 2.5+ hours daily on social platforms",
                    "Brands producing 300% more content than 2021",
                    "Organic reach declining 15-20% year-over-year"
                ]
            },
            {
                id: 2,
                heading: "Why Social Media Marketing Matters More Than Ever",
                content: "Despite the challenges, social media remains the most powerful channel for building brand awareness, nurturing customer relationships, and driving measurable business outcomes.",
                bullets: [
                    "Platform saturation requires smarter, not more, content",
                    "The attention economy demands strategic positioning",
                    "Data-driven content outperforms intuition by 340%",
                    "Organic and paid must work together as one engine"
                ]
            },
            {
                id: 3,
                heading: "How AI Is Transforming Social Media Strategy",
                content: "Artificial intelligence has moved beyond simple automation. Today's AI tools can predict trends, optimize posting times, generate creative variations, and even identify micro-influencers before they become mainstream.",
                subsections: [
                    {
                        title: "Audience Intelligence & Behavior Prediction",
                        content: "Machine learning models analyze billions of data points to understand when your audience is most receptive, what content formats resonate, and which messaging triggers engagement."
                    },
                    {
                        title: "Content Timing & Performance Forecasting",
                        content: "AI algorithms can predict with 85%+ accuracy which posts will perform best, allowing marketers to prioritize high-impact content and optimize publishing schedules."
                    },
                    {
                        title: "Creative Testing at Scale",
                        content: "Instead of A/B testing two headlines, AI enables testing of hundreds of variations simultaneously, identifying top performers in hours rather than weeks."
                    },
                    {
                        title: "Trend Detection Before Virality",
                        content: "Predictive AI monitors emerging conversations across platforms, alerting brands to trending topics 24-48 hours before they hit mainstream awareness."
                    }
                ]
            },
            {
                id: 4,
                heading: "Platform-Specific Strategy in 2026",
                content: "Each social platform has evolved its own unique ecosystem of content, audience behavior, and algorithmic preferences. A one-size-fits-all approach no longer works.",
                platforms: [
                    {
                        name: "Instagram & Facebook",
                        strategy: "Reels dominate reach. Short-form video with strong hooks in the first 0.5 seconds. Meta's AI prioritizes content that keeps users on-platform longer."
                    },
                    {
                        name: "LinkedIn",
                        strategy: "Long-form thought leadership and employee advocacy. Algorithm rewards comments over likes. Carousel posts see 3x higher engagement than static images."
                    },
                    {
                        name: "YouTube",
                        strategy: "Shorts for discovery, long-form for retention. AI-generated chapters and thumbnails improve click-through rates by 40%."
                    },
                    {
                        name: "Emerging Platforms",
                        strategy: "Threads, BeReal, and niche communities require authentic, unpolished content. Early adoption creates competitive moats."
                    }
                ]
            },
            {
                id: 5,
                heading: "Content That Actually Converts",
                content: "Creating content that drives business results requires a systematic approach combining creative excellence with data-driven optimization.",
                checklist: [
                    "Hook viewers in the first 0.5 seconds",
                    "Tell stories, not sales pitches",
                    "Include clear, value-driven CTAs",
                    "Maintain consistent brand voice across platforms",
                    "Balance consistency with calculated experimentation",
                    "Optimize for sound-off viewing (captions, visual storytelling)"
                ]
            },
            {
                id: 6,
                heading: "Measuring Real Social Media ROI",
                content: "Vanity metrics no longer satisfy executive leadership. In 2026, social media marketers must connect platform activity to revenue impact.",
                bullets: [
                    "Engagement is meaningless without attribution",
                    "Multi-touch attribution models reveal true impact",
                    "AI-driven analytics identify high-LTV audience segments",
                    "Focus on: Pipeline influence, brand search lift, and direct conversions"
                ]
            }
        ],
        callouts: [
            {
                type: "insight",
                title: "Key Insight",
                content: "AI allows brands to stop guessing and start predicting. The shift from reactive to proactive social media strategy is the defining competitive advantage of 2026."
            },
            {
                type: "tip",
                title: "Pro Tip",
                content: "Invest in AI tools that integrate directly with your CRM. Social engagement data becomes exponentially more valuable when connected to customer lifetime value."
            },
            {
                type: "warning",
                title: "Common Mistake",
                content: "Don't automate authenticity. AI should enhance human creativity, not replace it. Audiences can detect robotic content instantly."
            }
        ],
        expertInsight: "The brands winning at social media in 2026 aren't just creating more content—they're creating smarter content. AI gives us the ability to understand our audience at a granular level, predict what will resonate, and optimize in real-time. But the human element—creativity, empathy, storytelling—remains irreplaceable.",
        conclusion: "Social media marketing has transformed from an art into a science, but the most successful brands understand it remains both. AI provides the data, insights, and optimization power. Humans provide the creativity, emotional intelligence, and strategic vision. Together, they create social media strategies that don't just get likes—they drive growth.",
        cta: {
            headline: "Ready to Turn Social Media Into a Growth Channel?",
            subtext: "AI-powered social strategies designed to generate leads, not just likes.",
            buttonText: "Get a Free Social Media Audit",
            secondaryButtonText: "See Our Process"
        }
    },
    "how-to-measure-marketing-roi-with-ai-analytics": {
        title: "How to Measure Marketing ROI with AI Analytics",
        category: "Analytics",
        date: "Jan 10, 2026",
        readTime: "10 min read",
        author: {
            name: "David Park",
            role: "Head of Analytics",
            image: "/authors/david.jpg"
        },
        metaDescription: "Understand what's working, what's wasting money, and how AI-powered analytics turns data into confident decisions.",
        featuredImage: {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
            caption: "AI-powered analytics dashboard transforming complex data into actionable insights."
        },
        heroIntroduction: [
            "Modern marketing generates massive amounts of data — but data alone doesn't drive growth. Insight does.",
            "AI-powered analytics helps brands see what actually converts, stop guessing, and scale what works with confidence. Without proper analytics, even great campaigns bleed money silently."
        ],
        visualSections: [
            {
                id: 1,
                type: "splitCard",
                heading: "What Is Marketing Analytics?",
                content: "Marketing analytics is the process of tracking, measuring, and interpreting customer behavior across channels — from first click to final conversion.",
                subContent: "AI takes this further by detecting patterns humans miss, predicting performance trends, and optimizing campaigns in real time.",
                metricCards: [
                    { label: "Clicks → Conversions", icon: "TrendingUp" },
                    { label: "Cost per Acquisition", icon: "DollarSign" },
                    { label: "Customer Lifetime Value", icon: "Users" }
                ]
            },
            {
                id: 2,
                type: "warningCard",
                heading: "The Problem with Traditional Analytics",
                problems: [
                    "Too many dashboards, no clarity",
                    "Delayed insights",
                    "Manual reporting",
                    "Decisions based on assumptions"
                ],
                highlight: "Traditional analytics shows what happened. AI analytics explains why it happened — and what to do next."
            },
            {
                id: 3,
                type: "featureCards",
                heading: "How AI Analytics Changes Everything",
                features: [
                    {
                        title: "Predictive Insights",
                        description: "AI forecasts performance before campaigns fail.",
                        icon: "Brain"
                    },
                    {
                        title: "Attribution Intelligence",
                        description: "Know exactly which channel drives revenue — not just traffic.",
                        icon: "Target"
                    },
                    {
                        title: "Real-Time Optimization",
                        description: "Campaigns improve automatically based on live data.",
                        icon: "Zap"
                    }
                ]
            },
            {
                id: 4,
                type: "checklist",
                heading: "What We Track at GetMoreClients",
                subheading: "We track what matters — not vanity metrics.",
                items: [
                    "ROI & ROAS",
                    "Conversion paths",
                    "Funnel drop-offs",
                    "Audience behavior",
                    "Channel performance",
                    "Lifetime value"
                ]
            },
            {
                id: 5,
                type: "comparison",
                heading: "Real-World Impact",
                before: {
                    title: "Before",
                    items: [
                        "Guesswork decisions",
                        "Rising ad spend",
                        "No clear ROI"
                    ]
                },
                after: {
                    title: "After (With AI Analytics)",
                    items: [
                        "Clear performance attribution",
                        "Lower CPA",
                        "Scalable growth"
                    ]
                }
            }
        ],
        supportingImage: {
            url: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=1200&q=80",
            caption: "AI-powered dashboards transform complex data into actionable insights."
        },
        callouts: [
            {
                type: "insight",
                title: "The Foundation of Growth",
                content: "Every successful marketing strategy starts with clear measurement. Without analytics, you don't know what to scale, what to stop, or where money is leaking."
            },
            {
                type: "tip",
                title: "Pro Tip",
                content: "Connect your analytics to revenue outcomes, not just engagement metrics. The best marketers tie every action to business impact."
            }
        ],
        expertInsight: "The difference between good marketing and great marketing is measurement. AI doesn't replace human creativity — it amplifies it by showing you exactly what's working and why. The brands that embrace AI analytics today will outpace their competition for years to come.",
        conclusion: "With AI analytics, you grow with certainty. No more guessing. No more hoping. Just clear, data-driven decisions that compound over time.",
        cta: {
            headline: "Want to Know What's Really Driving Your Revenue?",
            subtext: "Get clarity on your marketing performance with AI-powered analytics.",
            buttonText: "Get Free Analytics Audit",
            secondaryButtonText: "See How It Works"
        }
    },
    "content-marketing-automation-a-complete-guide": {
        title: "Content That Educates, Engages, and Converts",
        category: "Content",
        date: "Jan 8, 2026",
        readTime: "12 min read",
        author: {
            name: "Emily Rodriguez",
            role: "Content Strategy Lead",
            image: "/authors/emily.jpg"
        },
        metaDescription: "AI-driven content strategy designed to attract the right audience, build trust, and turn attention into revenue.",
        featuredImage: {
            url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
            caption: "Strategic content planning session — where data meets creativity."
        },
        heroIntroduction: [
            "Content is no longer about posting more. It's about posting with purpose.",
            "Modern content must answer real questions, build authority, support SEO, social, and paid ads, and drive long-term growth. Without strategy, content becomes noise."
        ],
        visualSections: [
            {
                id: 1,
                type: "splitCard",
                heading: "What Is Content Strategy?",
                content: "Content strategy is the planning, creation, distribution, and optimization of content aligned with business goals.",
                subContent: "With AI, content strategy becomes data-informed, scalable, and predictable. It's not creativity vs data — it's creativity powered by intelligence.",
                metricCards: [
                    { label: "Data-Informed Topics", icon: "Brain" },
                    { label: "Scalable Production", icon: "TrendingUp" },
                    { label: "Predictable Results", icon: "Target" }
                ]
            },
            {
                id: 2,
                type: "warningCard",
                heading: "The Problem with Random Content",
                problems: [
                    "Posting without direction",
                    "Chasing trends blindly",
                    "No clear audience intent",
                    "No measurable ROI"
                ],
                highlight: "Content without strategy costs time. Content with strategy compounds results."
            },
            {
                id: 3,
                type: "featureCards",
                heading: "How AI Transforms Content Marketing",
                features: [
                    {
                        title: "Topic Intelligence",
                        description: "AI identifies what your audience is already searching for.",
                        icon: "Brain"
                    },
                    {
                        title: "Performance Prediction",
                        description: "Know which content will perform before publishing.",
                        icon: "TrendingUp"
                    },
                    {
                        title: "Continuous Optimization",
                        description: "Content improves over time based on engagement and conversions.",
                        icon: "Zap"
                    }
                ]
            },
            {
                id: 4,
                type: "steps",
                heading: "Our Content Creation Framework",
                steps: [
                    { step: 1, title: "Audience & Intent Research", icon: "Users" },
                    { step: 2, title: "Topic & Keyword Mapping", icon: "Search" },
                    { step: 3, title: "Content Planning & Calendar", icon: "Calendar" },
                    { step: 4, title: "Creation (Blogs, Social, Landing Pages)", icon: "FileText" },
                    { step: 5, title: "Distribution & Repurposing", icon: "Share2" },
                    { step: 6, title: "Performance Analysis & Optimization", icon: "TrendingUp" }
                ]
            },
            {
                id: 5,
                type: "contentGrid",
                heading: "Types of Content We Create",
                items: [
                    { title: "Blog Articles", icon: "FileText" },
                    { title: "Social Media Content", icon: "MessageCircle" },
                    { title: "Website Copy", icon: "Globe" },
                    { title: "Lead Magnets", icon: "Download" },
                    { title: "Email Sequences", icon: "Mail" },
                    { title: "SEO Landing Pages", icon: "Search" }
                ]
            },
            {
                id: 6,
                type: "comparison",
                heading: "Results Content Strategy Delivers",
                before: {
                    title: "Before",
                    items: [
                        "Low engagement",
                        "Inconsistent traffic",
                        "No content direction"
                    ]
                },
                after: {
                    title: "After (With Content Strategy)",
                    items: [
                        "Organic growth",
                        "Authority positioning",
                        "Predictable inbound leads"
                    ]
                }
            }
        ],
        supportingImage: {
            url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
            caption: "Strategic content connects brand messaging with audience intent."
        },
        callouts: [
            {
                type: "insight",
                title: "Content Is a Long-Term Asset",
                content: "Ads stop when budgets stop. Content keeps working. A strong content engine supports SEO, fuels social media, lowers paid acquisition costs, and builds trust at scale."
            },
            {
                type: "tip",
                title: "Pro Tip",
                content: "Repurpose every piece of content across multiple channels. One blog post can become 10 social posts, an email, and a video script."
            }
        ],
        expertInsight: "The brands that invest in content strategy today are building assets that compound over time. Unlike paid ads that stop when the budget runs out, great content continues to drive traffic, leads, and sales for months or even years. AI makes this process faster and more predictable than ever before.",
        conclusion: "Content without strategy is just noise. Content with strategy is a growth engine. Let AI-powered insights guide your content creation, and watch your organic presence compound into predictable, scalable business results.",
        cta: {
            headline: "Ready to Build a Content Engine That Scales?",
            subtext: "Let AI-powered strategy turn your content into a growth system.",
            buttonText: "Get My Content Strategy",
            secondaryButtonText: "See Our Process"
        }
    },
    "building-a-data-driven-marketing-strategy": {
        title: "Building a Data-Driven Marketing Strategy",
        category: "Strategy",
        date: "Jan 5, 2026",
        readTime: "9 min read",
        author: {
            name: "Marcus Chen",
            role: "Strategy & Growth Director",
            image: "/authors/marcus.jpg"
        },
        metaDescription: "Learn how to build a scalable, AI-powered marketing strategy that turns data into a predictable growth engine.",
        featuredImage: {
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
            caption: "Strategic marketing planning — bridging the gap between data and execution."
        },
        heroIntroduction: [
            "Random acts of marketing are the fastest way to burn budgets. In 2026, growth isn't about guessing — it's about building a data-driven engine.",
            "A high-impact strategy aligns your business goals with audience behavior, powered by AI insights that reveal where your next customer is hiding."
        ],
        visualSections: [
            {
                id: 1,
                type: "splitCard",
                heading: "The Power of Strategic Data",
                content: "Marketing strategy without data is just an opinion. We move beyond 'feeling' and into 'knowing'.",
                subContent: "By leveraging AI-powered analytics, we identify the exact levers that drive ROI, allowing you to stop chasing vanity metrics and start building real enterprise value.",
                metricCards: [
                    { label: "Market Penetration", icon: "Target" },
                    { label: "Growth Rate Prediction", icon: "TrendingUp" },
                    { label: "Channel ROI Forecast", icon: "DollarSign" }
                ]
            },
            {
                id: 2,
                type: "warningCard",
                heading: "The Danger of Guessing",
                problems: [
                    "Uneven customer acquisition costs",
                    "Wasted budget on dead-end channels",
                    "Fragmented brand messaging",
                    "Inability to scale successful campaigns"
                ],
                highlight: "Guesswork is a liability. Strategy is an asset that appreciates over time."
            },
            {
                id: 3,
                type: "featureCards",
                heading: "The 3 Pillars of Modern Strategy",
                features: [
                    {
                        title: "Audience Intelligence",
                        description: "Deep dive into who your buyers are and what triggers their decisions.",
                        icon: "Users"
                    },
                    {
                        title: "Cross-Channel Synergy",
                        description: "Ensuring SEO, Social, and Paid work together as one unified force.",
                        icon: "Zap"
                    },
                    {
                        title: "Outcome Engineering",
                        description: "Designing every campaign with a clear, measurable path to revenue.",
                        icon: "Target"
                    }
                ]
            },
            {
                id: 4,
                type: "steps",
                heading: "Our Strategy Blueprint",
                steps: [
                    { step: 1, title: "Business Goal Alignment", icon: "Target" },
                    { step: 2, title: "Market & Competitive Analysis", icon: "Search" },
                    { step: 3, title: "High-LTV Audience Mapping", icon: "Users" },
                    { step: 4, title: "Omnichannel Funnel Design", icon: "Share2" },
                    { step: 5, title: "KPI & Attribution Setup", icon: "TrendingUp" },
                    { step: 6, title: "Agile Execution & Scaling", icon: "Zap" }
                ]
            },
            {
                id: 5,
                type: "contentGrid",
                heading: "Strategic Deliverables",
                items: [
                    { title: "Growth Roadmaps", icon: "TrendingUp" },
                    { title: "Audience Personas", icon: "Users" },
                    { title: "Channel Playbooks", icon: "FileText" },
                    { title: "ROI Forecasts", icon: "DollarSign" },
                    { title: "Attribution Models", icon: "Target" },
                    { title: "Brand Guidelines", icon: "Globe" }
                ]
            },
            {
                id: 6,
                type: "comparison",
                heading: "Strategic vs Random Growth",
                before: {
                    title: "Random Growth",
                    items: [
                        "Inconsistent lead flow",
                        "High churn rates",
                        "Reactive decision making"
                    ]
                },
                after: {
                    title: "Strategic Growth (AI-Driven)",
                    items: [
                        "Predictable revenue streams",
                        "Optimized customer LTV",
                        "Proactive market leadership"
                    ]
                }
            }
        ],
        supportingImage: {
            url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
            caption: "Advanced data visualization — turn complex market signals into simple action."
        },
        callouts: [
            {
                type: "insight",
                title: "Strategy Is Multi-Touch",
                content: "Your customers rarely convert on the first click. A true strategy tracks the entire journey, identifying every touchpoint that contributes to the final sale."
            },
            {
                type: "tip",
                title: "Pro Tip",
                content: "Don't build your strategy on platforms you don't own. Use social and paid to fuel your owned assets like your website and email list."
            }
        ],
        expertInsight: "Strategy isn't a 50-page document that sits on a shelf. It's a living, breathing framework that allows you to make fast decisions with high confidence. In an AI world, the speed of your strategy determines the scale of your success.",
        conclusion: "A data-driven strategy is the bedrock of every successful brand we work with. It's the difference between hoping for growth and engineering it. By taking a scientific approach to marketing, you protect your budget while maximizing your impact.",
        cta: {
            headline: "Ready to Build Your Growth Blueprint?",
            subtext: "Let's design a strategy that turns your vision into a predictable revenue engine.",
            buttonText: "Build My Strategy",
            secondaryButtonText: "See Our Work"
        }
    },
    "email-marketing-in-the-age-of-ai": {
        title: "Email Marketing in the Age of AI",
        category: "Email",
        date: "Jan 3, 2026",
        readTime: "7 min read",
        author: {
            name: "Sophia Williams",
            role: "Marketing Automation Lead",
            image: "/authors/sophia.jpg"
        },
        metaDescription: "How intelligent automation, personalization, and data-driven insights are transforming email into the highest-ROI marketing channel.",
        featuredImage: {
            url: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&q=80",
            caption: "Human-centric marketing platform powered by AI automation."
        },
        heroIntroduction: [
            "Email marketing isn't dead — it's evolved. In the age of AI, success isn't about the size of your list; it's about the depth of your relevance.",
            "With intelligent automation, your campaigns adapt in real time to individual customer behaviors, making every interaction feel personal, timely, and valuable."
        ],
        visualSections: [
            {
                id: 1,
                type: "splitCard",
                heading: "Why Email Still Delivers",
                content: "Email remains the only marketing channel where you own the relationship with your audience completely.",
                subContent: "When powered by AI, email transforms from a broad broadcast tool into a precision revenue engine that drives engagement and loyalty at scale.",
                metricCards: [
                    { label: "Direct Access", icon: "Users" },
                    { label: "Zero Algorithm Dependency", icon: "Target" },
                    { label: "Highest Average ROI", icon: "DollarSign" }
                ]
            },
            {
                id: 2,
                type: "featureCards",
                heading: "AI-Powered Email Capabilities",
                features: [
                    {
                        title: "Predictive Send-Time",
                        description: "AI delivers your message exactly when each user is most likely to open it.",
                        icon: "Clock"
                    },
                    {
                        title: "Dynamic Personalization",
                        description: "Content adapts automatically based on browsing history and past behavior.",
                        icon: "Brain"
                    },
                    {
                        title: "Behavioral Automation",
                        description: "Journey-based triggers that respond to actions in real-time.",
                        icon: "Zap"
                    },
                    {
                        title: "Subject Line AI",
                        description: "Predict performance and optimize for the highest possible open rates.",
                        icon: "Target"
                    }
                ]
            },
            {
                id: 3,
                type: "steps",
                heading: "Our Email Growth Framework",
                steps: [
                    { step: 1, title: "Audience Segmentation & Intent Analysis", icon: "Search" },
                    { step: 2, title: "AI-Driven Personalization Setup", icon: "Brain" },
                    { step: 3, title: "Automated Journey & Flow Design", icon: "Share2" },
                    { step: 4, title: "Conversion-Focused Copy & Creative", icon: "FileText" },
                    { step: 5, title: "Continuous A/B Testing & Optimization", icon: "TrendingUp" }
                ]
            },
            {
                id: 4,
                type: "contentGrid",
                heading: "Types of Campaigns We Build",
                items: [
                    { title: "Welcome & Onboarding", icon: "Users" },
                    { title: "Lead Nurture Sequences", icon: "Target" },
                    { title: "Abandoned Cart Recovery", icon: "Zap" },
                    { title: "Loyalty & Retention Flows", icon: "CheckCircle2" },
                    { title: "Re-engagement Campaigns", icon: "Share2" },
                    { title: "Launch & Promotional Events", icon: "TrendingUp" }
                ]
            },
            {
                id: 5,
                type: "comparison",
                heading: "Email Strategy → Real Results",
                before: {
                    title: "Status Quo",
                    items: [
                        "Low open rates (<15%)",
                        "Generic messaging",
                        "Inconsistent sales"
                    ]
                },
                after: {
                    title: "AI-Driven Strategy",
                    items: [
                        "Personalized experiences",
                        "High engagement (>40%)",
                        "Predictable revenue"
                    ]
                }
            }
        ],
        supportingImage: {
            url: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80",
            caption: "The right email, at the right time, to the right person."
        },
        callouts: [
            {
                type: "insight",
                title: "System Thinking",
                content: "Email doesn't work alone. It amplifies your PPC retargeting, SEO lead capture, and product launches by acting as the central nervous system of your marketing stack."
            },
            {
                type: "tip",
                title: "Pro Tip",
                content: "Focus on clean lists over long lists. 5,000 engaged subscribers are infinitely more valuable than 50,000 inactive ones."
            }
        ],
        expertInsight: "The secret to email in 2026 isn't automation — it's empathy at scale. AI allows us to understand what a customer needs before they even ask, making your brand feel like a helpful assistant rather than a noisy advertiser.",
        conclusion: "Email remains the anchor of every high-growth marketing strategy. When you combine the direct access of email with the predictive power of AI, you create a sustainable revenue engine that grows stronger with every data point.",
        cta: {
            headline: "Turn Email Into a Revenue Channel",
            subtext: "Let AI-powered email marketing drive engagement, loyalty, and sales.",
            buttonText: "Get My Email Growth Plan",
            secondaryButtonText: "See Our Process"
        }
    }
};

const relatedPosts = [
    {
        title: "The Future of Social Media Marketing",
        category: "Social Media",
        date: "Jan 12, 2026",
        slug: "the-future-of-social-media-marketing"
    },
    {
        title: "How to Measure Marketing ROI with AI",
        category: "Analytics",
        date: "Jan 10, 2026",
        slug: "how-to-measure-marketing-roi-with-ai-analytics"
    }
];

export default function BlogDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const post = blogContentData[slug];
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const imageScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

    if (!post) return <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">Post not found</div>;

    return (
        <main className="min-h-screen bg-[#020617] text-[#F8FAFC] selection:bg-green-500/30 overflow-x-hidden font-jakarta" ref={containerRef}>
            {/* Header / Nav */}
            <div className="fixed top-0 z-50 w-full bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 py-4">
                <div className="mx-auto max-w-5xl px-6 flex items-center justify-between">
                    <Link href="/blogs" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Blog</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{post.title}</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-8 ${post.category === "Social Media"
                            ? "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                            : post.category === "Analytics"
                                ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                                : post.category === "Content"
                                    ? "bg-purple-500/10 border border-purple-500/20 text-purple-400"
                                    : post.category === "Strategy"
                                        ? "bg-indigo-500/10 border border-indigo-500/20 text-indigo-400"
                                        : post.category === "Email"
                                            ? "bg-blue-600/10 border border-blue-500/20 text-blue-400"
                                            : "bg-green-500/10 border border-green-500/20 text-green-400"
                            }`}
                    >
                        <Zap className="h-3 w-3" />
                        {post.category}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight text-white"
                    >
                        {post.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                        {post.metaDescription}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 font-medium"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] text-white font-bold">
                                {post.author.name.charAt(0)}
                            </div>
                            <span className="text-slate-300">{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="px-6 mb-24 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative rounded-[20px] overflow-hidden border border-white/10 shadow-2xl"
                >
                    <motion.div style={{ scale: imageScale }}>
                        <img
                            src={post.featuredImage.url}
                            alt={`${post.title} - AI SEO Strategy`}
                            className="w-full aspect-[16/9] object-cover"
                        />
                    </motion.div>
                </motion.div>
                <p className="mt-4 text-center text-sm text-slate-500 italic">
                    {post.featuredImage.caption}
                </p>
            </section>

            {/* Main Content */}
            <div className="max-w-[780px] mx-auto px-6 relative mb-32">
                {/* Intro */}
                <div className="space-y-6 mb-16">
                    {post.heroIntroduction.map((para: string, idx: number) => (
                        <p key={idx} className="text-xl text-slate-200 leading-relaxed">
                            {para}
                        </p>
                    ))}
                </div>

                {/* SEO Strategies (if present) */}
                {post.strategies && (
                    <div className="space-y-20">
                        {post.strategies.map((strategy: any, idx: number) => (
                            <motion.section
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 id={`strategy-${strategy.id}`} className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight flex items-center gap-4">
                                    <span className={post.category === "SEO" ? "text-green-500/20" : "text-blue-500/20"}>{strategy.id.toString().padStart(2, '0')}</span>
                                    {strategy.heading}
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    {strategy.content}
                                </p>
                            </motion.section>
                        ))}
                    </div>
                )}

                {/* Social Media Sections (if present) */}
                {post.sections && (
                    <div className="space-y-20">
                        {post.sections.map((section: any, idx: number) => (
                            <motion.section
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 id={`section-${section.id}`} className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
                                    {section.heading}
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    {section.content}
                                </p>

                                {/* Bullets */}
                                {section.bullets && (
                                    <ul className="space-y-3 mb-6">
                                        {section.bullets.map((bullet: string, bIdx: number) => (
                                            <li key={bIdx} className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span className="text-slate-300">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Subsections */}
                                {section.subsections && (
                                    <div className="space-y-8 mt-8">
                                        {section.subsections.map((sub: any, sIdx: number) => (
                                            <div key={sIdx} className="pl-6 border-l-2 border-blue-500/30">
                                                <h3 className="text-xl font-semibold text-white mb-3">{sub.title}</h3>
                                                <p className="text-[#94A3B8] leading-relaxed">{sub.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Platforms */}
                                {section.platforms && (
                                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                                        {section.platforms.map((platform: any, pIdx: number) => (
                                            <div key={pIdx} className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
                                                <h4 className="text-lg font-semibold text-blue-300 mb-2">{platform.name}</h4>
                                                <p className="text-sm text-slate-400">{platform.strategy}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Checklist */}
                                {section.checklist && (
                                    <div className="mt-8 p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                                        <h4 className="text-lg font-semibold text-white mb-4">Content Conversion Checklist</h4>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {section.checklist.map((item: string, cIdx: number) => (
                                                <div key={cIdx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                                    <span className="text-slate-300 text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.section>
                        ))}
                    </div>
                )}

                {/* Analytics Visual Sections (if present) */}
                {post.visualSections && (
                    <div className="space-y-16">
                        {post.visualSections.map((section: any, idx: number) => {
                            const iconMap: Record<string, any> = {
                                TrendingUp, DollarSign, Users, Brain, Target, Zap,
                                Search, Calendar, Share2, MessageCircle, Globe, Download, Mail, FileText
                            };

                            // Split Card with Metric Cards
                            if (section.type === "splitCard") {
                                return (
                                    <motion.section
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">{section.heading}</h2>
                                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                                            <div className="space-y-4">
                                                <p className="text-[#94A3B8] text-lg leading-relaxed">{section.content}</p>
                                                <p className="text-slate-300 leading-relaxed">{section.subContent}</p>
                                            </div>
                                            <div className="grid gap-3">
                                                {section.metricCards?.map((card: any, mIdx: number) => {
                                                    const IconComponent = iconMap[card.icon] || TrendingUp;
                                                    return (
                                                        <motion.div
                                                            key={mIdx}
                                                            whileHover={{ y: -4, scale: 1.02 }}
                                                            className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-4 hover:border-cyan-500/30 transition-colors group cursor-default"
                                                        >
                                                            <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                                                                <IconComponent className="h-5 w-5" />
                                                            </div>
                                                            <span className="text-white font-medium">{card.label}</span>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </motion.section>
                                );
                            }

                            // Warning Card
                            if (section.type === "warningCard") {
                                return (
                                    <motion.section
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20"
                                    >
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                                                <AlertTriangle className="h-6 w-6" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-white">{section.heading}</h2>
                                        </div>
                                        <ul className="space-y-3 mb-6">
                                            {section.problems?.map((problem: string, pIdx: number) => (
                                                <motion.li
                                                    key={pIdx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: pIdx * 0.1 }}
                                                    className="flex items-start gap-3 text-slate-300"
                                                >
                                                    <span className="text-amber-400 mt-1">•</span>
                                                    {problem}
                                                </motion.li>
                                            ))}
                                        </ul>
                                        <p className="text-lg text-white font-medium border-l-4 border-cyan-500 pl-4 italic">
                                            {section.highlight}
                                        </p>
                                    </motion.section>
                                );
                            }

                            // Feature Cards
                            if (section.type === "featureCards") {
                                return (
                                    <motion.section
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white tracking-tight text-center">{section.heading}</h2>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {section.features?.map((feature: any, fIdx: number) => {
                                                const IconComponent = iconMap[feature.icon] || Zap;
                                                return (
                                                    <motion.div
                                                        key={fIdx}
                                                        whileHover={{ y: -8 }}
                                                        className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all text-center group"
                                                    >
                                                        <div className="inline-flex p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                                                            <IconComponent className="h-7 w-7" />
                                                        </div>
                                                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                                        <p className="text-sm text-slate-400">{feature.description}</p>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </motion.section>
                                );
                            }

                            // Checklist
                            if (section.type === "checklist") {
                                return (
                                    <motion.section
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="p-8 rounded-2xl bg-white/[0.04] border border-white/10"
                                    >
                                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{section.heading}</h2>
                                        <p className="text-cyan-400 text-sm font-medium mb-6">{section.subheading}</p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {section.items?.map((item: string, iIdx: number) => (
                                                <div key={iIdx} className="flex items-center gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                                                    <span className="text-slate-300">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.section>
                                );
                            }

                            // Before/After Comparison
                            if (section.type === "comparison") {
                                return (
                                    <motion.section
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white tracking-tight text-center">{section.heading}</h2>
                                        <div className="grid md:grid-cols-2 gap-6 relative">
                                            {/* Before */}
                                            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                                                <h3 className="text-xl font-bold text-red-400 mb-4">{section.before.title}</h3>
                                                <ul className="space-y-3">
                                                    {section.before.items.map((item: string, bIdx: number) => (
                                                        <li key={bIdx} className="flex items-center gap-3 text-slate-400">
                                                            <span className="text-red-400">✗</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* Arrow */}
                                            <motion.div
                                                animate={{ x: [0, 10, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
                                            >
                                                <ArrowRightCircle className={`h-10 w-10 ${post.category === "Content" ? "text-purple-400" : "text-cyan-400"}`} />
                                            </motion.div>
                                            {/* After */}
                                            <div className={`p-6 rounded-2xl ${post.category === "Content" ? "bg-purple-500/5 border border-purple-500/20" : post.category === "Strategy" ? "bg-indigo-500/5 border border-indigo-500/20" : post.category === "Email" ? "bg-blue-500/5 border border-blue-500/20" : "bg-cyan-500/5 border border-cyan-500/20"}`}>
                                                <h3 className={`text-xl font-bold ${post.category === "Content" ? "text-purple-400" : post.category === "Strategy" ? "text-indigo-400" : post.category === "Email" ? "text-blue-400" : "text-cyan-400"} mb-4`}>{section.after.title}</h3>
                                                <ul className="space-y-3">
                                                    {section.after.items.map((item: string, aIdx: number) => (
                                                        <li key={aIdx} className="flex items-center gap-3 text-slate-300">
                                                            <CheckCircle2 className={`h-5 w-5 ${post.category === "Content" ? "text-purple-400" : post.category === "Strategy" ? "text-indigo-400" : post.category === "Email" ? "text-blue-400" : "text-cyan-400"}`} />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.section>
                                );
                            }

                            // Steps Framework (Content)
                            if (section.type === "steps") {
                                return (
                                    <motion.section
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white tracking-tight text-center">{section.heading}</h2>
                                        <div className="space-y-4">
                                            {section.steps?.map((step: any, sIdx: number) => {
                                                const IconComponent = iconMap[step.icon] || Zap;
                                                return (
                                                    <motion.div
                                                        key={sIdx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: sIdx * 0.1 }}
                                                        className={`flex items-center gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/10 ${post.category === "Email" ? "hover:border-blue-500/30" : "hover:border-purple-500/30"} transition-colors group`}
                                                    >
                                                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${post.category === "Strategy" ? "bg-indigo-500/20 text-indigo-400" : post.category === "Email" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"} font-bold text-sm`}>
                                                            {step.step}
                                                        </div>
                                                        <div className={`p-2 rounded-lg ${post.category === "Strategy" ? "bg-indigo-500/10 text-indigo-400" : post.category === "Email" ? "bg-blue-500/10 text-blue-400" : "bg-purple-500/10 text-purple-400"} group-hover:scale-110 transition-transform`}>
                                                            <IconComponent className="h-5 w-5" />
                                                        </div>
                                                        <span className="text-white font-medium">{step.title}</span>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </motion.section>
                                );
                            }

                            // Content Grid (Content Types)
                            if (section.type === "contentGrid") {
                                return (
                                    <motion.section
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white tracking-tight text-center">{section.heading}</h2>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {section.items?.map((item: any, iIdx: number) => {
                                                const IconComponent = iconMap[item.icon] || FileText;
                                                return (
                                                    <motion.div
                                                        key={iIdx}
                                                        whileHover={{ y: -4 }}
                                                        className={`p-5 rounded-xl bg-white/[0.04] border border-white/10 ${post.category === "Strategy" ? "hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.1)]" : post.category === "Email" ? "hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)]" : "hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]"} transition-all text-center group`}
                                                    >
                                                        <div className={`inline-flex p-3 rounded-xl ${post.category === "Strategy" ? "bg-indigo-500/10 text-indigo-400" : post.category === "Email" ? "bg-blue-500/10 text-blue-400" : "bg-purple-500/10 text-purple-400"} mb-3 group-hover:scale-110 transition-transform`}>
                                                            <IconComponent className="h-6 w-6" />
                                                        </div>
                                                        <h4 className="text-white font-medium text-sm">{item.title}</h4>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </motion.section>
                                );
                            }

                            return null;
                        })}
                    </div>
                )}

                {/* Supporting Image (Analytics) */}
                {post.supportingImage && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="my-16 rounded-2xl overflow-hidden border border-white/10"
                    >
                        <img
                            src={post.supportingImage.url}
                            alt={post.supportingImage.caption}
                            className="w-full aspect-[16/9] object-cover"
                        />
                        <p className="p-4 text-center text-sm text-slate-500 italic bg-white/[0.02]">
                            {post.supportingImage.caption}
                        </p>
                    </motion.div>
                )}

                {/* Callout Cards */}
                {post.callouts && post.callouts.map((callout: any, cIdx: number) => {
                    const iconColors: Record<string, string> = {
                        insight: post.category === "Analytics" ? "text-cyan-400 bg-cyan-500/10" : post.category === "Content" ? "text-purple-400 bg-purple-500/10" : post.category === "Strategy" ? "text-indigo-400 bg-indigo-500/10" : post.category === "Email" ? "text-blue-400 bg-blue-500/10" : "text-blue-400 bg-blue-500/10",
                        tip: post.category === "Analytics" ? "text-cyan-400 bg-cyan-500/10" : post.category === "Content" ? "text-purple-400 bg-purple-500/10" : post.category === "Strategy" ? "text-indigo-400 bg-indigo-500/10" : post.category === "Email" ? "text-blue-400 bg-blue-500/10" : "text-blue-400 bg-blue-500/10",
                        warning: "text-amber-400 bg-amber-500/10"
                    };
                    const borderColors: Record<string, string> = {
                        insight: post.category === "Analytics" ? "border-l-cyan-500" : post.category === "Content" ? "border-l-purple-500" : post.category === "Strategy" ? "border-l-indigo-500" : post.category === "Email" ? "border-l-blue-500" : "border-l-blue-500",
                        tip: post.category === "Analytics" ? "border-l-cyan-500" : post.category === "Content" ? "border-l-purple-500" : post.category === "Strategy" ? "border-l-indigo-500" : post.category === "Email" ? "border-l-blue-500" : "border-l-blue-500",
                        warning: "border-l-amber-500"
                    };
                    return (
                        <motion.div
                            key={cIdx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`my-16 p-8 rounded-2xl bg-white/[0.04] border border-white/10 border-l-4 ${borderColors[callout.type] || "border-l-green-500"} relative overflow-hidden group shadow-[0_0_50px_-12px_rgba(59,130,246,0.1)]`}
                        >
                            <div className="flex gap-6 items-start">
                                <div className={`p-3 rounded-xl ${iconColors[callout.type] || "text-green-400 bg-green-500/10"}`}>
                                    <Sparkles className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{callout.title}</h3>
                                    <p className="text-slate-400 leading-relaxed italic">
                                        "{callout.content}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Expert Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Expert Perspective</h2>
                    <p className="text-[#94A3B8] text-lg leading-relaxed">
                        {post.expertInsight}
                    </p>
                </motion.div>

                {/* Conclusion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Conclusion</h2>
                    <p className="text-[#94A3B8] text-lg leading-relaxed">
                        {post.conclusion}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`relative p-10 md:p-14 rounded-3xl ${post.category === "Social Media"
                        ? "bg-gradient-to-br from-blue-500/10 via-sky-500/5 to-transparent border border-blue-500/20"
                        : post.category === "Analytics"
                            ? "bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-transparent border border-cyan-500/20"
                            : post.category === "Content"
                                ? "bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-transparent border border-purple-500/20"
                                : post.category === "Strategy"
                                    ? "bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-transparent border border-indigo-500/20"
                                    : post.category === "Email"
                                        ? "bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent border border-blue-500/20"
                                        : "bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent border border-green-500/20"
                        } text-center overflow-hidden`}
                >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${post.category === "Social Media"
                        ? "via-blue-500/40"
                        : post.category === "Analytics"
                            ? "via-cyan-500/40"
                            : post.category === "Content"
                                ? "via-purple-500/40"
                                : post.category === "Strategy"
                                    ? "via-indigo-500/40"
                                    : post.category === "Email"
                                        ? "via-blue-500/40"
                                        : "via-green-500/40"
                        } to-transparent`} />
                    <Target className={`h-12 w-12 ${post.category === "Social Media"
                        ? "text-blue-400"
                        : post.category === "Analytics"
                            ? "text-cyan-400"
                            : post.category === "Content"
                                ? "text-purple-400"
                                : post.category === "Strategy"
                                    ? "text-indigo-400"
                                    : post.category === "Email"
                                        ? "text-blue-400"
                                        : "text-green-400"
                        } mx-auto mb-6 opacity-80`} />
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        {post.cta.headline}
                    </h3>
                    <p className="text-slate-400 text-lg mb-10 max-w-sm mx-auto">
                        {post.cta.subtext}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className={`inline-flex items-center gap-3 px-10 py-5 rounded-full ${post.category === "Social Media"
                                ? "bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                                : post.category === "Analytics"
                                    ? "bg-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                                    : post.category === "Content"
                                        ? "bg-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                                        : post.category === "Strategy"
                                            ? "bg-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                                            : post.category === "Email"
                                                ? "bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                                                : "bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                                } text-[#020617] font-bold hover:scale-105 transition-transform`}
                        >
                            {post.cta.buttonText}
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        {post.cta.secondaryButtonText && (
                            <Link
                                href="/#how-it-works"
                                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
                            >
                                {post.cta.secondaryButtonText}
                            </Link>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Related Reads */}
            <section className="bg-white/[0.02] border-t border-white/5 py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-white tracking-tight">Related Articles</h2>
                        <Link href="/blogs" className="text-slate-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                            View All <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {relatedPosts.map((related, idx) => (
                            <Link key={idx} href={`/blogs/${related.slug}`} className="group relative rounded-2xl bg-white/[0.04] border border-white/10 p-8 hover:bg-white/[0.06] hover:border-green-500/30 transition-all">
                                <span className="text-xs font-bold text-green-400 tracking-widest uppercase mb-4 block">
                                    {related.category}
                                </span>
                                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                                    {related.title}
                                </h4>
                                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {related.date}
                                    </div>
                                    <span className="flex items-center gap-1 group-hover:text-slate-300 transition-colors">
                                        Read Now <ArrowRight className="h-3 w-3" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
