import { Project, SkillCategory, Service, Education, Experience } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "smart-helmet",
    title: "Smart Helmet for Accident Detection",
    description: "An IoT-based safety solution that detects accidents and alerts emergency services with real-time GPS location.",
    tags: ["Arduino", "GSM", "GPS", "Accelerometer"],
    category: "Featured",
    image: "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "ecg-monitoring",
    title: "ECG Monitoring System",
    description: "1D CNN-based signal processing system for real-time heart rate monitoring and anomaly detection.",
    tags: ["Python", "TensorFlow", "Signal Processing"],
    category: "Featured",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "earthquake-detector",
    title: "Arduino Earthquake Detector",
    description: "High-sensitivity vibration detection system using Arduino to provide early warnings for seismic activities.",
    tags: ["Arduino", "Vibration Sensor", "Buzzer"],
    category: "Featured",
    image: "https://images.unsplash.com/photo-1522067822602-0c9facc8411b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "weather-station",
    title: "IoT Weather Station",
    description: "Cloud-connected station monitoring temperature, humidity, and atmospheric pressure.",
    tags: ["ESP8266", "Blynk", "Sensors"],
    category: "IoT",
  },
  {
    id: "obstacle-robot",
    title: "Obstacle Avoiding Robot",
    description: "Autonomous robot that navigates environments using ultrasonic sensors.",
    tags: ["Arduino", "Ultrasonic sensor", "Servo"],
    category: "Robotics",
  },
  {
    id: "gas-leakage",
    title: "Gas Leakage Detection",
    description: "Safety system for homes and industries to detect LPG leaks and trigger alarms.",
    tags: ["MQ-2", "Arduino", "Buzzer"],
    category: "Safety",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Hardware",
    skills: [
      { name: "Arduino", icon: "Cpu" },
      { name: "ESP32 / ESP8266", icon: "Zap" },
      { name: "Raspberry PI", icon: "Microchip" },
      { name: "Sensors & Actuators", icon: "Activity" },
      { name: "PCB Design", icon: "CircuitBoard" },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "C / C++", icon: "Code2" },
      { name: "Python", icon: "Terminal" },
      { name: "DotNet", icon: "Braces" },
    ],
  },
  {
    title: "Tools & Software",
    skills: [
      { name: "MATLAB", icon: "FunctionSquare" },
      { name: "Proteus", icon: "Settings" },
      { name: "EasyEDA", icon: "Layout" },
      { name: "TinkerCAD", icon: "Box" },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    title: "Robotics Training",
    description: "Hands-on mentorship for beginners in robotics and embedded systems.",
    icon: "Users",
  },
  {
    title: "Student Project Development",
    description: "Guidance and development for engineering and school-level projects.",
    icon: "Lightbulb",
  },
  {
    title: "PCB Design Services",
    description: "Professional multi-layer PCB layout and prototyping services.",
    icon: "CircuitBoard",
  },
  {
    title: "IoT System Development",
    description: "End-to-end IoT solutions from hardware sensors to cloud dashboards.",
    icon: "Globe",
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor in Electronics & Communication Engineering",
    institution: "Cosmos College, Pokhara University",
    year: "2021 – 2026",
    description: "Specializing in embedded systems and hardware-software integration.",
  },
  {
    degree: "+2 in Science",
    institution: "Kanti Secondary School",
    year: "2018 – 2020",
  },
  {
    degree: "SEE",
    institution: "Kanti Secondary School",
    year: "2016 – 2017",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "STEAM Teacher",
    company: "NEPATRONIX",
    period: "Currently",
    description: "Teaching robotics, coding, and electronics to young students.",
  },
  {
    role: "Intern",
    company: "Robotics Association of Nepal",
    period: "2023",
    description: "Participated in various robotics events and hardware troubleshooting.",
  },
  {
    role: "Robotics Workshop Tutor",
    company: "Skilltootr",
    period: "2023",
    description: "Organized and led hands-on workshops for microcontroller programming.",
  },
  {
    role: "Member",
    company: "Cosmos Robotics Club",
    period: "Ongoing",
    description: "Collaborating on innovative club projects and competitions.",
  },
];
