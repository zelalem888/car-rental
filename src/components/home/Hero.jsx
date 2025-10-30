import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Car,
  CheckCircle,
  ChevronRight,
  Star,
  Shield,
  Clock,
  CreditCard,
} from "lucide-react";
import { assets } from "../../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const slideIn = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2 },
  };

  const features = [
    { icon: Shield, text: "Fully Insured" },
    { icon: Clock, text: "24/7 Support" },
    { icon: CreditCard, text: "Flexible Payment" },
  ];

  const stats = [
    { value: "50+", label: "Car Models" },
    { value: "98%", label: "Happy Clients" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="container flex flex-col h-auto p-8 sm:p-16 relative w-full mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 max-w-xl"
          initial="initial"
          animate="animate"
          variants={fadeIn}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-100 rounded-full">
            <Star className="text-orange-500 w-5 h-5" />
            <span className="text-orange-700 font-medium text-sm">
              Premium Car Rental Service
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Save <span className="text-orange-500">big</span> with our
            <span className="text-orange-500"> car rental</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Experience the freedom of the open road with our premium car rental
            service. Unbeatable prices, unlimited miles, and flexible pick-up
            options.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/models")}
              className="flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-lg
                          hover:bg-orange-600 transition-all">
              <span className="font-medium">Book Ride</span>
              <CheckCircle className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/learnmore")}
              className="flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg
                         hover:bg-gray-800 transition-all">
              <span className="font-medium">Learn More</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-orange-500" />
                </div>
                <span className="text-gray-700 font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-orange-500">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 relative"
          initial="initial"
          animate="animate"
          variants={slideIn}>
          <div className="relative">
            {/* Background Gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-500/5 
                          rounded-full filter blur-3xl transform -rotate-12"></div>

            <img
              src={assets.car}
              alt="Luxury Car"
              className="relative z-10 w-full h-auto max-w-2xl mx-auto 
                       transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-4 -right-4 bg-white p-6 rounded-lg shadow-xl">
            <div className="flex items-center gap-3">
              <Car className="text-orange-500 w-8 h-8" />
              <div>
                <p className="font-semibold text-lg">Latest Models</p>
                <p className="text-gray-500">Premium Selection</p>
              </div>
            </div>
          </motion.div>

          {/* Additional Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="hidden lg:block absolute top-4 -left-4 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
            <p className="font-semibold">Best Prices Guaranteed</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
