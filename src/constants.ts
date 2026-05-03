import { Project, SkillCategory, Service, Education, Experience } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "smart-helmet",
    title: "Smart Helmet for Accident Prevention and Detection",
    description: "An advanced IoT-based safety system designed to save lives on the road. The helmet detects collision impacts using high-precision motion sensors and automatically transmits the user's GPS coordinates via GSM. Accident prevention is implemented through MQ3 alcohol detection and secondary ignition control of the motorcycle via relay modules.",
    tags: ["IoT", "Safety", "Embedded"],
    category: "Featured",
    image: "https://i.postimg.cc/nzLwTCCZ/smart-helmet.jpg",
    components: ["ESP32", "MPU6050", "GPS Module", "GSM Module", "MQ3 Alcohol Sensor", "Relay Modules", "Pressure Sensor"],
  },
  {
    id: "ecg-monitoring",
    title: "ECG signal classification and detection of BPM using 1D CNN",
    description: "A real-time cardiac health tracking system that captures electrical signals from the heart. This project integrates hardware sensing with 1D Convolutional Neural Networks (CNN) for automated anomaly detection, allowing for early warning signs of cardiovascular issues through a portable, low-cost platform.",
    tags: ["Bio-Tech", "Signal Processing", "AI"],
    category: "Featured",
    image: "https://i.postimg.cc/mDk7KRLf/ecg.png",
    components: ["Arduino UNO", "ECG Sensor (AD8232)", "Processing Unit", "Python/TensorFlow Dashboard"],
  },
  {
    id: "earthquake-detector",
    title: "Arduino Based Earthquake Detection System",
    description: "A high-sensitivity seismic activity monitor. Utilizing digital accelerometers, it detects primary and secondary waves of earthquakes to trigger immediate alarms. The system displays intensity levels in real-time, providing crucial seconds for evacuation in tremor-prone areas.",
    tags: ["Safety", "Sensors", "Arduino"],
    category: "Featured",
    image: "https://i.postimg.cc/qBNpv7jT/arduino-based-earthquake-detector.jpg",
    components: ["Arduino UNO", "MPU6050", "LED Display", "I2C Module", "Buzzer"],
  },
  // IoT Projects
  {
    id: "weather-station",
    title: "Weather Station",
    description: "Cloud-connected station monitoring real-time environmental parameters.",
    tags: ["ESP8266", "Blynk", "Sensors"],
    category: "IoT",
  },
  {
    id: "light-control",
    title: "Light Control System",
    description: "Automated street light and indoor lighting control for energy efficiency.",
    tags: ["LDR", "Relay", "Arduino"],
    category: "IoT",
  },
  {
    id: "home-automation",
    title: "Home Automation",
    description: "Voice and app-controlled home appliances integration.",
    tags: ["ESP32", "Firebase", "Relays"],
    category: "IoT",
  },
  {
    id: "smart-city",
    title: "Smart City",
    description: "Integrated infrastructure monitoring including traffic and lighting.",
    tags: ["Sensors", "LoRa", "ESP32"],
    category: "IoT",
  },
  {
    id: "smart-parking",
    title: "Smart Parking",
    description: "Real-time parking slot availability detection and remote booking.",
    tags: ["Ultrasonic", "ESP8266", "Web App"],
    category: "IoT",
  },
  // Robotics Projects
  {
    id: "obstacle-bot",
    title: "Obstacle Avoiding Robot",
    description: "Autonomous navigation system using ultrasonic distance sensing.",
    tags: ["Arduino", "Ultrasonic", "Servo"],
    category: "Robotics",
  },
  {
    id: "bluetooth-car",
    title: "Bluetooth Controlled Car",
    description: "Smartphone-controlled robotic vehicle with manual overrides.",
    tags: ["HC-05", "Motor Driver", "Arduino"],
    category: "Robotics",
  },
  {
    id: "radar-system",
    title: "Ultrasonic Radar System",
    description: "Object mapping and detection using rotating sonar sweep.",
    tags: ["Processing", "Arduino", "Servo"],
    category: "Robotics",
  },
  {
    id: "smart-dustbin",
    title: "Smart Dustbin",
    description: "Lid automated trash can with fill-level monitoring.",
    tags: ["Ultrasonic", "Servo", "Battery"],
    category: "Robotics",
  },
  // Safety & Monitoring
  {
    id: "gas-leakage",
    title: "Gas Leakage Detection",
    description: "Instant LPG/Industrial gas detection with GSM alert protocol.",
    tags: ["MQ-2", "Buzzer", "GSM"],
    category: "Safety & Monitoring",
  },
  {
    id: "water-level",
    title: "Water Level Indicator",
    description: "Multi-point overhead tank monitoring with auto-pump control.",
    tags: ["Transistors", "LEDs", "Relay"],
    category: "Safety & Monitoring",
  },
  {
    id: "blind-stick",
    title: "Blind Stick",
    description: "Obstacle and moisture sensing smart navigation aid.",
    tags: ["Ultrasonic", "Buzzer", "Arduino"],
    category: "Safety & Monitoring",
  },
  {
    id: "irrigation",
    title: "Automated Irrigation",
    description: "Soil moisture based plant watering system for precision farming.",
    tags: ["Soil Sensor", "Water Pump", "Relay"],
    category: "Safety & Monitoring",
  },
  {
    id: "flood-detection",
    title: "Flood Detection System",
    description: "Early warning system for rising water levels in risk zones.",
    tags: ["Water Sensor", "LoRa", "GSM"],
    category: "Safety & Monitoring",
  },
  // Miscellaneous
  {
    id: "air-quality",
    title: "Air Quality Monitoring",
    description: "Real-time PM2.5, CO2, and VOC tracking with data logging.",
    tags: ["MQ-135", "SD Module", "OLED"],
    category: "Miscellaneous",
  },
  {
    id: "smart-waste",
    title: "Smart Waste Management",
    description: "Route optimization for garbage collection based on bin levels.",
    tags: ["GPS", "SIM800L", "ESP32"],
    category: "Miscellaneous",
  },
  {
    id: "patient-health",
    title: "Patient Health Monitoring",
    description: "IoT pulse and temperature tracker for remote medical care.",
    tags: ["MAX30102", "Blynk", "Wi-Fi"],
    category: "Miscellaneous",
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
  {
    title: "Other Skills",
    skills: [
      { name: "Networking Basics", icon: "Network" },
      { name: "Troubleshooting", icon: "Wrench" },
      { name: "Adaptability", icon: "Shuffle" },
      { name: "Mentoring", icon: "Users" },
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
  {
    title: "Programming Training",
    description: "Fundamentals of Python, C, C++, DotNet.",
    icon: "Code2",
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
