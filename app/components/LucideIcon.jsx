"use client";

import {
    Compass, Shield, Zap, Search, Calendar, PenTool, Bot,
    Building, Moon, TrendingDown, Target, Lock, Lightbulb,
    CheckCircle, Handshake, TrendingUp, Clock,
    Brain, Unlock,
} from "lucide-react";

const iconMap = {
    compass: Compass,
    shield: Shield,
    zap: Zap,
    search: Search,
    calendar: Calendar,
    "pen-tool": PenTool,
    bot: Bot,
    building: Building,
    moon: Moon,
    "trending-down": TrendingDown,
    target: Target,
    lock: Lock,
    lightbulb: Lightbulb,
    "check-circle": CheckCircle,
    handshake: Handshake,
    "trending-up": TrendingUp,
    clock: Clock,
    brain: Brain,
    unlock: Unlock,
};

export default function LucideIcon({ name, size = 24, className = "" }) {
    const Icon = iconMap[name];
    if (!Icon) return null;
    return <Icon size={size} className={className} strokeWidth={1.5} />;
}
