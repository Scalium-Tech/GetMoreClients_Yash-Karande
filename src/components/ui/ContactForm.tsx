"use client"

import { useState } from "react"
import { Send, Loader2, User, Mail, Phone, MessageSquare, CheckCircle, ChevronDown, ListTodo } from "lucide-react"
import { Button } from "./Button"
import { supabase } from "@/lib/supabase"

const services = [
    "Social Media (AI-Powered Strategy)",
    "Search Engine Optimisation (AI-Enhanced SEO)",
    "PPC (Pay-Per-Click with AI)",
    "Content Strategy (AI-Driven Planning)",
    "App & Web Design (AI-Assisted UX)",
    "Infographics (AI-Optimized Storytelling)",
    "E-Commerce Asset Creation",
    "Animations (AI-Enhanced Motion)",
    "Brand Asset Creation (AI-Driven Identity)",
]

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            if (!supabase) {
                throw new Error('Supabase client not initialized. Please check your .env.local file.')
            }

            const { error } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        service: formData.service,
                        message: formData.message,
                    },
                ])

            if (error) throw error

            setIsSubmitted(true)
        } catch (error: any) {
            console.error('Error submitting form:', error)
            // Show the actual error message to help debug
            const errorMsg = error.message || 'Unknown error occurred'
            alert(`Submission Error: ${errorMsg}`)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    if (isSubmitted) {
        return (
            <div className="text-center py-16 bg-white/5 backdrop-blur-md border border-green-500/20 rounded-3xl p-8 shadow-2xl shadow-green-500/10">
                <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 ring-4 ring-green-500/10 animate-pulse">
                    <CheckCircle className="h-12 w-12 text-green-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Request Sent!</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                    Thank you for reaching out. Our team will review your requirement and get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                    Send another message
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0f172a]/50 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm"
                    placeholder="Your name"
                />
            </div>

            {/* Email */}
            <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0f172a]/50 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm"
                    placeholder="you@example.com"
                />
            </div>

            {/* Phone */}
            <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0f172a]/50 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm"
                    placeholder="+91 91234 56789"
                />
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
                <label htmlFor="service" className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">
                    Select Service *
                </label>
                <div className="relative">
                    <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0f172a]/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer text-sm"
                    >
                        <option value="" className="bg-[#0f172a]">Choose a service</option>
                        {services.map((service) => (
                            <option key={service} value={service} className="bg-[#0f172a]">
                                {service}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0f172a]/50 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none text-sm"
                    placeholder="Tell us more about your question or project..."
                />
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                size="lg"
                className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest shadow-xl active:scale-[0.98] transition-all bg-white hover:bg-gray-100 text-black border-none"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="ml-3 h-4 w-4" />
                    </>
                )}
            </Button>

        </form>
    )
}

export default ContactForm
