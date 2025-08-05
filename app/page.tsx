"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Home,
  Zap,
  Shield,
  Droplets,
  Wifi,
  Award,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Github,
  Twitter,
  Instagram,
  Sun,
  Moon,
  Play,
  ArrowRight,
  Check,
  Star,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function PremiumModularHomesLanding() {
  const [darkMode, setDarkMode] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [isUnfolding, setIsUnfolding] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  const sections = [
    "hero",
    "unfold-demo",
    "products",
    "technical",
    "process",
    "features",
    "gallery",
    "testimonials",
    "contact",
  ]

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (index: number) => {
    const section = document.getElementById(sections[index])
    section?.scrollIntoView({ behavior: "smooth" })
    setCurrentSection(index)
  }

  const triggerUnfold = () => {
    setIsUnfolding(true)
    setTimeout(() => setIsUnfolding(false), 3000)
  }

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const techY = useTransform(scrollYProgress, [0.4, 0.7], [100, -100])

  return (
    <div className={`${darkMode ? "dark" : ""}`} ref={containerRef}>
      <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
        {/* Premium Navigation */}
        <nav className="fixed top-0 w-full bg-white/70 dark:bg-black/70 backdrop-blur-xl z-50 border-b border-gray-200/20 dark:border-gray-800/20">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-light tracking-wide"
            >
              <span className="font-thin">MODULAR</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">LIVE</span>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-8">
              {["Products", "Technology", "Process", "Gallery", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(index + 2)}
                  className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 tracking-wide"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-16 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-40 border-b border-gray-200/20 dark:border-gray-800/20 lg:hidden"
            >
              <div className="container mx-auto px-6 py-6 space-y-4">
                {["Products", "Technology", "Process", "Gallery", "Contact"].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(index + 2)
                      setMobileMenuOpen(false)
                    }}
                    className="block w-full text-left text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section - Scroll Locked */}
        <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 text-center z-10">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl font-thin mb-8 tracking-tight"
            >
              Unfold
              <br />
              <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Tomorrow
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl font-light mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Revolutionary modular homes that deploy in 24 hours.
              <br />
              Built for decades. Engineered for life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection(1)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
              >
                Watch Unfold Demo
                <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection(2)}
                className="px-8 py-4 text-lg rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
              >
                Explore Models
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center text-gray-400 dark:text-gray-600"
            >
              <span className="text-sm mb-2 tracking-wide">SCROLL</span>
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </section>

        {/* Interactive Unfold Demo */}
        <section
          id="unfold-demo"
          className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-thin mb-16 tracking-tight"
            >
              Watch It <span className="font-bold">Unfold</span>
            </motion.h2>

            {/* Interactive Container Animation */}
            <div className="relative mx-auto w-96 h-64 mb-12">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={triggerUnfold}
                animate={
                  isUnfolding
                    ? {
                        scaleX: [1, 1.5, 2],
                        scaleY: [1, 0.8, 1.2],
                        rotateY: [0, 180, 360],
                      }
                    : {}
                }
                transition={{ duration: 3, ease: "easeInOut" }}
              >
                <div className="absolute inset-4 bg-white/20 rounded-xl flex items-center justify-center">
                  <motion.div
                    animate={isUnfolding ? { scale: [1, 0, 1], rotate: [0, 180, 360] } : {}}
                    transition={{ duration: 3, delay: 0.5 }}
                    className="text-white text-6xl font-bold"
                  >
                    {isUnfolding ? "🏠" : "📦"}
                  </motion.div>
                </div>
              </motion.div>

              {/* Unfold Stages */}
              <AnimatePresence>
                {isUnfolding && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: 1 }}
                      className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-yellow-500 w-16 h-8 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
                    >
                      💧
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: 1.5 }}
                      className="absolute -right-20 top-1/2 transform -translate-y-1/2 bg-green-500 w-16 h-8 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
                    >
                      ⚡
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: 2 }}
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 bg-red-500 w-16 h-8 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
                    >
                      🔥
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Click the container to see the unfold process
            </motion.p>

            <Button
              onClick={triggerUnfold}
              disabled={isUnfolding}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300"
            >
              {isUnfolding ? "Unfolding..." : "Start Demo"}
            </Button>
          </div>
        </section>

        {/* Premium Product Showcase */}
        <section id="products" className="py-32 px-6 bg-white dark:bg-black">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-thin mb-6 tracking-tight">
                Three <span className="font-bold">Revolutions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Each designed for a different lifestyle. All engineered for excellence.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Container Homes",
                  subtitle: "Industrial Strength",
                  price: "From ₹65,00,000",
                  features: [
                    "Weatherproof & Soundproof",
                    "UK Electrical Certified",
                    "Deploy in <24 hours",
                    "40ft x 8ft x 9.5ft",
                  ],
                  color: "from-blue-600 to-cyan-600",
                  icon: "🏗️",
                },
                {
                  title: "Bubble Houses",
                  subtitle: "Futuristic Living",
                  price: "From ₹95,00,000",
                  features: ["360° Panoramic Views", "Eco-Pod Technology", "10-Year Warranty", "Climate Controlled"],
                  color: "from-purple-600 to-pink-600",
                  icon: "🫧",
                },
                {
                  title: "Capsule Homes",
                  subtitle: "Urban Compact",
                  price: "From ₹45,00,000",
                  features: ["Stackable Design", "Micro-Living Optimized", "Off-Grid Ready", "Smart Storage"],
                  color: "from-green-600 to-teal-600",
                  icon: "🏠",
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -20, scale: 1.02 }}
                  className="group relative"
                >
                  <Card className="h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Product Header */}
                      <div className={`h-48 bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                            className="text-8xl opacity-80"
                          >
                            {product.icon}
                          </motion.div>
                        </div>
                        <div className="absolute bottom-4 left-6 text-white">
                          <h3 className="text-2xl font-bold">{product.title}</h3>
                          <p className="text-white/80">{product.subtitle}</p>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="p-8">
                        <div className="mb-6">
                          <span className="text-3xl font-bold">{product.price}</span>
                          <span className="text-gray-500 dark:text-gray-400 ml-2">+ Installation & GST</span>
                        </div>

                        <ul className="space-y-3 mb-8">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                              <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-full py-3 font-medium transition-all duration-300">
                          Configure & Quote
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Diagrams */}
        <section id="technical" className="py-32 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
          <motion.div style={{ y: techY }} className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-thin mb-6 tracking-tight">
                <span className="font-bold">Engineering</span> Excellence
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                UK-certified systems with premium-grade materials and 10-year structural warranty
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Technical Diagram */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-8 text-center">System Integration</h3>

                  {/* House Outline */}
                  <div className="relative mx-auto w-80 h-48 border-4 border-gray-300 dark:border-gray-600 rounded-lg">
                    {/* Water System */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute -left-12 top-8 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                    >
                      <Droplets className="h-4 w-4 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "3rem" }}
                      transition={{ delay: 0.7 }}
                      className="absolute left-0 top-10 h-1 bg-blue-500"
                    ></motion.div>

                    {/* Electrical System */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.9 }}
                      className="absolute -right-12 top-8 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center"
                    >
                      <Zap className="h-4 w-4 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "3rem" }}
                      transition={{ delay: 1.1 }}
                      className="absolute right-0 top-10 h-1 bg-yellow-500"
                    ></motion.div>

                    {/* Grounding */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 1.3 }}
                      className="absolute left-1/2 -bottom-12 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <Shield className="h-4 w-4 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "3rem" }}
                      transition={{ delay: 1.5 }}
                      className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-1 bg-green-500"
                    ></motion.div>

                    {/* Interior Elements */}
                    <div className="absolute inset-4 grid grid-cols-3 gap-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 1.7 + i * 0.1 }}
                          className="bg-gray-200 dark:bg-gray-700 rounded"
                        ></motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                      <span>Water I/O</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                      <span>UK Electrical</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                      <span>Grounding</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Technical Specs */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {[
                  {
                    title: "UK Electrical Standards",
                    description: "BS 7671 compliant wiring with RCD protection and proper earthing systems",
                    icon: Zap,
                    color: "text-yellow-500",
                  },
                  {
                    title: "Water Management",
                    description: "Integrated inlet/outlet systems with pressure regulation and filtration",
                    icon: Droplets,
                    color: "text-blue-500",
                  },
                  {
                    title: "Structural Integrity",
                    description: "10-year warranty on all structural components with premium-grade materials",
                    icon: Shield,
                    color: "text-green-500",
                  },
                  {
                    title: "Smart Integration",
                    description: "Pre-wired for IoT devices with fiber-ready infrastructure",
                    icon: Wifi,
                    color: "text-purple-500",
                  },
                ].map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-800 ${spec.color}`}>
                      <spec.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{spec.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{spec.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Installation Process Timeline */}
        <section id="process" className="py-32 px-6 bg-white dark:bg-black">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-thin mb-6 tracking-tight">
                <span className="font-bold">24-Hour</span> Deployment
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From delivery to move-in ready in a single day
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block"></div>

              <div className="space-y-16">
                {[
                  {
                    time: "Hour 0-2",
                    title: "Delivery & Site Prep",
                    description: "Container arrives via specialized transport. Site preparation and foundation check.",
                    icon: "🚛",
                    side: "left",
                  },
                  {
                    time: "Hour 2-8",
                    title: "Unfold & Assembly",
                    description: "Automated unfold sequence. Structural assembly and weatherproofing installation.",
                    icon: "🏗️",
                    side: "right",
                  },
                  {
                    time: "Hour 8-16",
                    title: "Systems Integration",
                    description: "Water, electrical, and smart home systems connected and tested to UK standards.",
                    icon: "⚡",
                    side: "left",
                  },
                  {
                    time: "Hour 16-20",
                    title: "Interior Finishing",
                    description: "Final interior setup, appliance installation, and quality assurance checks.",
                    icon: "🏠",
                    side: "right",
                  },
                  {
                    time: "Hour 20-24",
                    title: "Handover & Move-in",
                    description: "Final inspection, documentation, and keys handed over. Ready to live in!",
                    icon: "🔑",
                    side: "left",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: step.side === "left" ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`flex items-center ${
                      step.side === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
                    } flex-col lg:space-x-8 space-y-4 lg:space-y-0`}
                  >
                    <div
                      className={`flex-1 ${step.side === "left" ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}
                    >
                      <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
                        <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">{step.time}</div>
                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </div>
                    </div>

                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-3xl shadow-2xl z-10 relative"
                      >
                        {step.icon}
                      </motion.div>
                    </div>

                    <div className="flex-1 lg:block hidden"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features Grid */}
        <section id="features" className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-thin mb-6 tracking-tight">
                <span className="font-bold">Premium</span> by Design
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "UK Graded Wiring",
                  description: "BS 7671 compliant electrical systems",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  icon: Shield,
                  title: "Fire Resistant",
                  description: "Class A fire rating materials",
                  color: "from-red-500 to-pink-500",
                },
                {
                  icon: Droplets,
                  title: "All-Weather Proof",
                  description: "IP65 rated weatherproofing",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Wifi,
                  title: "Smart Home Ready",
                  description: "Pre-wired IoT infrastructure",
                  color: "from-green-500 to-teal-500",
                },
                {
                  icon: Home,
                  title: "Off-Grid Capable",
                  description: "Solar and battery ready",
                  color: "from-purple-500 to-indigo-500",
                },
                {
                  icon: Award,
                  title: "10-Year Warranty",
                  description: "Comprehensive coverage",
                  color: "from-orange-500 to-red-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group"
                >
                  <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Gallery */}
        <section id="gallery" className="py-32 px-6 bg-white dark:bg-black">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-thin mb-6 tracking-tight">
                <span className="font-bold">Living</span> Spaces
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                >
                  <img
                    src={`/modern-modular-home.png?height=400&width=600&query=modern modular home ${index % 3 === 0 ? "interior living room" : index % 3 === 1 ? "kitchen" : "bedroom"}`}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-bold">
                        {index % 3 === 0 ? "Living Space" : index % 3 === 1 ? "Kitchen" : "Bedroom"}
                      </h3>
                      <p className="text-white/80">Premium finishes</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section id="testimonials" className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-thin mb-6 tracking-tight">
                <span className="font-bold">Trusted</span> by Innovators
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Sarah Mitchell",
                  role: "Sustainable Living Advocate",
                  text: "The engineering excellence is remarkable. Our container home has exceeded every expectation for quality and comfort.",
                  rating: 5,
                  image: "/professional-woman-diverse.png",
                },
                {
                  name: "James Chen",
                  role: "Tech Entrepreneur",
                  text: "From concept to move-in in 24 hours. The smart home integration is seamless and the build quality is exceptional.",
                  rating: 5,
                  image: "/professional-man.png",
                },
                {
                  name: "Emma Rodriguez",
                  role: "Architect",
                  text: "As an architect, I'm impressed by the attention to detail and innovative design. This is the future of housing.",
                  rating: 5,
                  image: "/professional-woman-architect.png",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Contact Form */}
        <section id="contact" className="py-32 px-6 bg-white dark:bg-black">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-thin mb-6 tracking-tight">
                Start Your <span className="font-bold">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Configure your dream home and get a personalized quote
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-12 rounded-3xl shadow-2xl"
            >
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                    <Input
                      className="h-12 rounded-xl border-0 bg-white dark:bg-gray-800 shadow-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <Input
                      type="email"
                      className="h-12 rounded-xl border-0 bg-white dark:bg-gray-800 shadow-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                    <Input
                      className="h-12 rounded-xl border-0 bg-white dark:bg-gray-800 shadow-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Home Type</label>
                    <Select>
                      <SelectTrigger className="h-12 rounded-xl border-0 bg-white dark:bg-gray-800 shadow-sm">
                        <SelectValue placeholder="Select your preferred model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="container">Container Home</SelectItem>
                        <SelectItem value="bubble">Bubble House</SelectItem>
                        <SelectItem value="capsule">Capsule Home</SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Details</label>
                  <Textarea
                    className="rounded-xl border-0 bg-white dark:bg-gray-800 shadow-sm min-h-32"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-14 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Custom Quote
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1 h-14 rounded-xl font-medium text-lg border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent"
                  >
                    Schedule Tour
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Premium Footer */}
        <footer className="bg-black text-white py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="text-3xl font-light mb-6 tracking-wide">
                  <span className="font-thin">MODULAR</span>
                  <span className="font-bold text-blue-400">LIVE</span>
                </div>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed max-w-md">
                  Pioneering the future of sustainable living with revolutionary modular homes that deploy in 24 hours.
                </p>
                <div className="flex space-x-6">
                  <Github className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                  <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                  <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-lg">Products</h4>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors duration-200">
                      Container Homes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors duration-200">
                      Bubble Houses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors duration-200">
                      Capsule Homes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors duration-200">
                      Custom Solutions
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-lg">Contact</h4>
                <div className="space-y-4 text-gray-400">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-blue-400" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-blue-400" />
                    <span>hello@modularlive.in</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                    <span>Mumbai, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">© 2024 ModularLive. All rights reserved.</p>
              <div className="flex space-x-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={() => scrollToSection(8)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
          >
            <span className="hidden sm:inline mr-2">Get Quote</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
